import { ArrowUpRight, Award } from 'lucide-react'
import { profile } from '@/lib/constants'
import { copy } from '@/lib/copy'
import type { Locale } from '@/lib/i18n'
export default function About({ locale }: { locale: Locale }) {
  const c = copy[locale].about
  return (
    <section id="about" className="section-pad research-section">
      <div className="section-shell research-layout">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>
            {c.title[0]}
            <br />
            {c.title[1]}
          </h2>
          <p className="section-intro">{c.intro}</p>
          <p className="body-copy">{c.body}</p>
        </div>
        <article className="research-card">
          <div className="research-card-top">
            <Award size={28} strokeWidth={1.5} />
            <span>XI SIINTEC · 2025</span>
          </div>
          <p className="label">{c.recognition}</p>
          <h3>{c.award}</h3>
          <p>{c.category}</p>
          <div className="research-divider" />
          <h4>{c.research}</h4>
          <p className="research-caption">{c.publication}</p>
          <a
            className="text-link"
            href={profile.article}
            target="_blank"
            rel="noreferrer"
          >
            {c.read} <ArrowUpRight size={18} />
          </a>
        </article>
      </div>
    </section>
  )
}
