import {
  ArrowUpRight,
  BriefcaseBusiness,
  Database,
  Layers3,
  Cloud,
} from 'lucide-react'
import { copy } from '@/lib/copy'
import type { Locale } from '@/lib/i18n'
const icons = [Layers3, Database, BriefcaseBusiness, Cloud]
export default function Experience({ locale }: { locale: Locale }) {
  const c = copy[locale].experience
  return (
    <section id="experience" className="section-pad section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>
            {c.title[0]}
            <br />
            {c.title[1]}
          </h2>
        </div>
        <p>{c.intro}</p>
      </div>
      <div className="experience-layout">
        <div className="experience-identity">
          <span className="label">{c.period}</span>
          <h3>
            SERIN<span> / BA</span>
          </h3>
          <p>{c.institution}</p>
          <span className="experience-role">{c.role}</span>
          <ArrowUpRight
            className="experience-arrow"
            size={40}
            strokeWidth={1}
          />
          <div className="experience-stack">
            Laravel · Vue.js · Inertia.js
            <br />
            React · Next.js · PostgreSQL · MySQL
          </div>
        </div>
        <div className="experience-grid">
          {c.areas.map((area, index) => {
            const Icon = icons[index]
            return (
              <article key={area.title}>
                <Icon size={22} strokeWidth={1.5} />
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
