'use client'
import { useState } from 'react'
import { ArrowUpRight, LoaderCircle } from 'lucide-react'
import { profile } from '@/lib/constants'

export default function Contact() {
  const [busy, setBusy] = useState(false)
  const [feedback, setFeedback] = useState<{
    ok: boolean
    message: string
  } | null>(null)
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setBusy(true)
    setFeedback(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(25000),
      })
      const result = await response.json()
      setFeedback({
        ok: response.ok,
        message: response.ok
          ? 'Mensagem recebida. Obrigado pelo contato!'
          : result.error ||
            'Não foi possível enviar. Tente novamente ou use o e-mail ao lado.',
      })
      if (response.ok) form.reset()
    } catch {
      setFeedback({
        ok: false,
        message:
          'Não foi possível confirmar o envio. Você também pode entrar em contato diretamente por e-mail.',
      })
    } finally {
      setBusy(false)
    }
  }
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">05 / PRÓXIMA CONVERSA</p>
          <h2>
            Tem um desafio
            <br />
            em mente?
          </h2>
          <p>
            Vamos conversar sobre desenvolvimento, IA aplicada e oportunidades
            de construir algo útil.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={20} />
          </a>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <p className="contact-note">SALVADOR, BAHIA · BRASIL</p>
        </div>
        <form
          onSubmit={submit}
          className="contact-form"
          aria-label="Formulário de contato"
          aria-busy={busy}
        >
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="form-row">
            <div>
              <label htmlFor="name">Seu nome</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                placeholder="Como posso chamar você?"
                disabled={busy}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="voce@exemplo.com"
                disabled={busy}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Assunto</label>
            <input
              id="subject"
              name="subject"
              required
              minLength={3}
              maxLength={150}
              placeholder="Sobre o que vamos conversar?"
              disabled={busy}
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={5000}
              placeholder="Conte um pouco sobre sua ideia ou oportunidade."
              disabled={busy}
            />
          </div>
          <button
            className="button button-primary"
            type="submit"
            disabled={busy}
          >
            {busy ? (
              <>
                <LoaderCircle size={16} /> Enviando…
              </>
            ) : (
              <>
                Enviar mensagem <ArrowUpRight size={16} />
              </>
            )}
          </button>
          <p className="form-info">
            Seu nome e e-mail serão utilizados para responder a esta mensagem.
          </p>
          <div aria-live="polite" aria-atomic="true">
            {feedback && (
              <p
                className={`form-feedback ${feedback.ok ? '' : 'error'}`}
                role={feedback.ok ? 'status' : 'alert'}
              >
                {feedback.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
