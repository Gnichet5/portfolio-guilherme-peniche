export interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}
export type Validation =
  { ok: true; data: ContactData } | { ok: false; error: string }
export function validateContact(input: unknown): Validation {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    return { ok: false, error: 'Dados inválidos.' }
  const body = input as Record<string, unknown>
  if (body.honeypot !== undefined && body.honeypot !== '')
    return { ok: false, error: 'Não foi possível enviar a mensagem.' }
  for (const key of ['name', 'email', 'subject', 'message']) {
    if (typeof body[key] !== 'string')
      return { ok: false, error: 'Preencha todos os campos.' }
  }
  const data: ContactData = {
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    subject: (body.subject as string).trim(),
    message: (body.message as string).trim(),
  }
  if (
    data.name.length < 2 ||
    data.name.length > 100 ||
    data.subject.length < 3 ||
    data.subject.length > 150 ||
    data.message.length < 10 ||
    data.message.length > 5000
  )
    return {
      ok: false,
      error:
        'Confira o tamanho dos campos. A mensagem deve ter entre 10 e 5.000 caracteres.',
    }
  if (
    data.email.length > 254 ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) ||
    /[\r\n]/.test(data.subject + data.name)
  )
    return { ok: false, error: 'Confira o nome, assunto e endereço de e-mail.' }
  return { ok: true, data }
}
export function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ]!,
  )
}
export function contactEmail(data: ContactData) {
  return {
    replyTo: data.email,
    subject: `[Portfólio] ${data.subject}`,
    text: `Nome: ${data.name}\nEmail: ${data.email}\nAssunto: ${data.subject}\n\n${data.message}`,
    html: `<h2>Nova mensagem do portfólio</h2><p><strong>Nome:</strong> ${escapeHtml(data.name)}</p><p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Assunto:</strong> ${escapeHtml(data.subject)}</p><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
  }
}

// Proteção local complementar. Em produção, configurar também uma regra de rate limit no WAF da Vercel.
export function createLocalLimiter(intervalMs = 60000, maxEntries = 2000) {
  const submissions = new Map<string, number>()
  return (key: string, now = Date.now()) => {
    for (const [entry, expires] of submissions)
      if (expires <= now) submissions.delete(entry)
    if (submissions.has(key) || submissions.size >= maxEntries) return false
    submissions.set(key, now + intervalMs)
    return true
  }
}
