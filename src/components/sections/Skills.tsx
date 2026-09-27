import { profile } from '@/lib/constants'
import { getSkills } from '@/lib/content'
import { copy } from '@/lib/copy'
import type { Locale } from '@/lib/i18n'
export default function Skills({ locale }: { locale: Locale }) {
  const c = copy[locale].skills
  return (
    <section id="skills" className="section-pad section-shell">
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
      <div className="skills-grid">
        {getSkills(locale).map((group, index) => (
          <article key={group.title}>
            <span className="label">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="certification-strip">
        <div className="certification-icon" aria-hidden="true">
          AWS
        </div>
        <div>
          <span className="label">{c.certified}</span>
          <h3>AWS Certified Cloud Practitioner</h3>
          <p>{c.certification}</p>
        </div>
        <a
          className="text-link"
          href={profile.certification}
          target="_blank"
          rel="noreferrer"
        >
          {c.credential} ↗
        </a>
      </div>
      <div className="learning-strip">
        <span className="label">{c.evolving}</span>
        <div>
          <h3>{c.cloud}</h3>
          <p>{c.learning}</p>
        </div>
        <span className="learning-badge">{c.continuous} ↗</span>
      </div>
    </section>
  )
}
