import { detectLocale } from '@/lib/i18n'
import { contactMessages } from '@/lib/contact-messages'
import nodemailer from 'nodemailer'
import {
  contactEmail,
  createLocalLimiter,
  validateContact,
} from '@/lib/contact'
export const runtime = 'nodejs'
export const maxDuration = 30
const allowRequest = createLocalLimiter()
const MAX_BODY_BYTES = 24000

async function readBody(request: Request) {
  const reader = request.body?.getReader()
  if (!reader) return ''
  const decoder = new TextDecoder()
  let bytes = 0
  let body = ''
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      bytes += value.byteLength
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel()
        throw new RangeError('Body too large')
      }
      body += decoder.decode(value, { stream: true })
    }
    return body + decoder.decode()
  } finally {
    reader.releaseLock()
  }
}

export async function POST(request: Request) {
  const locale = detectLocale(request.headers.get('accept-language'))
  const messages = contactMessages[locale]
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin)
    return Response.json({ error: messages.origin }, { status: 403 })
  if (
    !request.headers
      .get('content-type')
      ?.toLowerCase()
      .startsWith('application/json')
  )
    return Response.json({ error: messages.format }, { status: 415 })
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES)
    return Response.json({ error: messages.large }, { status: 413 })
  let body: unknown
  try {
    body = JSON.parse(await readBody(request))
  } catch (error) {
    return Response.json(
      {
        error: error instanceof RangeError ? messages.large : messages.invalid,
      },
      { status: error instanceof RangeError ? 413 : 400 },
    )
  }
  const validation = validateContact(body, locale)
  if (!validation.ok)
    return Response.json({ error: validation.error }, { status: 400 })
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASSWORD
  if (!user || !pass)
    return Response.json(
      {
        error: messages.unavailable,
      },
      { status: 503 },
    )
  const ip = (
    request.headers.get('x-vercel-forwarded-for') ||
    request.headers.get('x-forwarded-for') ||
    'unknown'
  )
    .split(',')[0]
    .trim()
  if (!allowRequest(ip))
    return Response.json(
      { error: messages.limit },
      { status: 429, headers: { 'Retry-After': '60' } },
    )
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 15000,
  })
  try {
    await transporter.sendMail({
      from: user,
      to: user,
      ...contactEmail(validation.data),
    })
    return Response.json({
      message: messages.success,
    })
  } catch {
    console.error('Falha no transporte de e-mail do formulário de contato.')
    return Response.json(
      {
        error: messages.failed,
      },
      { status: 502 },
    )
  } finally {
    transporter.close()
  }
}
