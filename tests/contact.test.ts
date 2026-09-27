import nodemailer from 'nodemailer'
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  validateContact,
  contactEmail,
  createLocalLimiter,
} from '../src/lib/contact'
import { POST } from '../src/app/api/contact/route'
const valid = {
  name: 'Pessoa Teste',
  email: 'teste@example.com',
  subject: 'Novo projeto',
  message: 'Quero conversar sobre um projeto.',
  honeypot: '',
}
test('validates input types, blank content, size and header injection', () => {
  for (const body of [
    null,
    [],
    { ...valid, name: {} },
    { ...valid, message: ' '.repeat(15) },
    { ...valid, email: 'a@b' },
    { ...valid, subject: 'Oi\r\nBcc: test@example.com' },
    { ...valid, message: 'a'.repeat(5001) },
    { ...valid, honeypot: 'spam' },
  ])
    assert.equal(validateContact(body).ok, false)
  assert.equal(validateContact(valid).ok, true)
})
test('user markup is escaped in email and a plain text version exists', () => {
  const mail = contactEmail({
    ...valid,
    name: '<img src=x>',
    message: '<script>alert("x")</script> & teste',
  })
  assert.ok(!mail.html.includes('<script>'))
  assert.ok(!mail.html.includes('<img'))
  assert.ok(mail.html.includes('&lt;script&gt;'))
  assert.ok(mail.text.includes('<script>'))
})
test('local limiter expires and does not grow without a bound', () => {
  const limit = createLocalLimiter(60000, 2)
  assert.equal(limit('a', 0), true)
  assert.equal(limit('a', 100), false)
  assert.equal(limit('b', 100), true)
  assert.equal(limit('c', 100), false)
  assert.equal(limit('a', 60000), true)
})
function request(body: string, headers: Record<string, string> = {}) {
  return new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body,
  })
}
test('API rejects malformed, oversized and cross-origin requests without sending mail', async () => {
  assert.equal((await POST(request('{'))).status, 400)
  assert.equal(
    (await POST(request(JSON.stringify({ ...valid, email: {} })))).status,
    400,
  )
  assert.equal((await POST(request('a'.repeat(24001)))).status, 413)
  assert.equal(
    (
      await POST(
        request(JSON.stringify(valid), { origin: 'https://other.example' }),
      )
    ).status,
    403,
  )
  assert.equal(
    (
      await POST(
        request(JSON.stringify(valid), { 'content-type': 'text/plain' }),
      )
    ).status,
    415,
  )
})
test('API explains missing email configuration without claiming delivery', async () => {
  const oldUser = process.env.EMAIL_USER
  const oldPass = process.env.EMAIL_PASSWORD
  delete process.env.EMAIL_USER
  delete process.env.EMAIL_PASSWORD
  try {
    assert.equal((await POST(request(JSON.stringify(valid)))).status, 503)
  } finally {
    if (oldUser !== undefined) process.env.EMAIL_USER = oldUser
    if (oldPass !== undefined) process.env.EMAIL_PASSWORD = oldPass
  }
})

test('API reports delivery only after SMTP accepts and never sends an automatic reply', async () => {
  const { mock } = await import('node:test')
  const oldUser = process.env.EMAIL_USER
  const oldPass = process.env.EMAIL_PASSWORD
  process.env.EMAIL_USER = 'owner@example.com'
  process.env.EMAIL_PASSWORD = 'test-only'
  const sent: unknown[] = []
  let fail = false
  const transportMock = mock.method(nodemailer, 'createTransport', () => ({
    sendMail: async (mail: unknown) => {
      if (fail) throw new Error('SMTP unavailable')
      sent.push(mail)
      return { accepted: ['owner@example.com'] }
    },
    close: () => {},
  }))
  try {
    const success = await POST(
      request(JSON.stringify(valid), { 'x-vercel-forwarded-for': '192.0.2.1' }),
    )
    assert.equal(success.status, 200)
    assert.equal(sent.length, 1)
    assert.equal((sent[0] as { to: string }).to, 'owner@example.com')
    assert.equal(
      (transportMock.mock.calls[0].arguments[0] as { tls?: unknown }).tls,
      undefined,
    )
    const limited = await POST(
      request(JSON.stringify(valid), { 'x-vercel-forwarded-for': '192.0.2.1' }),
    )
    assert.equal(limited.status, 429)
    fail = true
    const failed = await POST(
      request(JSON.stringify(valid), { 'x-vercel-forwarded-for': '192.0.2.2' }),
    )
    assert.equal(failed.status, 502)
    assert.equal(sent.length, 1)
  } finally {
    transportMock.mock.restore()
    if (oldUser === undefined) delete process.env.EMAIL_USER
    else process.env.EMAIL_USER = oldUser
    if (oldPass === undefined) delete process.env.EMAIL_PASSWORD
    else process.env.EMAIL_PASSWORD = oldPass
  }
})
