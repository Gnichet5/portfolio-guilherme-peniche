'use client'
import { useState } from 'react'
import { ArrowUpRight, LoaderCircle } from 'lucide-react'
import { profile } from '@/lib/constants'
import { copy } from '@/lib/copy'
import type { Locale } from '@/lib/i18n'
export default function Contact({ locale }: { locale: Locale }) {
  const c = copy[locale].contact
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
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': locale,
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(25000),
      })
      const result = await response.json()
      setFeedback({
        ok: response.ok,
        message: response.ok ? c.success : result.error || c.failure,
      })
      if (response.ok) form.reset()
    } catch {
      setFeedback({ ok: false, message: c.connection })
    } finally {
      setBusy(false)
    }
  }
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>
            {c.title[0]}
            <br />
            {c.title[1]}
          </h2>
          <p>{c.intro}</p>
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
          <p className="contact-note">{c.location}</p>
        </div>
        <form
          onSubmit={submit}
          className="contact-form"
          aria-label={c.form}
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
              <label htmlFor="name">{c.name}</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                placeholder={c.namePlaceholder}
                disabled={busy}
              />
            </div>
            <div>
              <label htmlFor="email">{c.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder={c.emailPlaceholder}
                disabled={busy}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject">{c.subject}</label>
            <input
              id="subject"
              name="subject"
              required
              minLength={3}
              maxLength={150}
              placeholder={c.subjectPlaceholder}
              disabled={busy}
            />
          </div>
          <div>
            <label htmlFor="message">{c.message}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={5000}
              placeholder={c.messagePlaceholder}
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
                <LoaderCircle size={16} /> {c.sending}
              </>
            ) : (
              <>
                {c.send} <ArrowUpRight size={16} />
              </>
            )}
          </button>
          <p className="form-info">{c.privacy}</p>
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
