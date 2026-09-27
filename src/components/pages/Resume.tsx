import Link from 'next/link'
import { profile } from '@/lib/constants'
import { getProjects, getSkills } from '@/lib/content'
import { localizedPath, type Locale } from '@/lib/i18n'
import { copy } from '@/lib/copy'
import PrintButton from '@/components/ui/PrintButton'
export default function Resume({ locale }: { locale: Locale }) {
  const c = copy[locale].resume
  return (
    <main id="main-content" className="resume section-shell">
      <div className="resume-top">
        <Link className="text-link" href={localizedPath(locale)}>
          ← {c.back}
        </Link>
        <PrintButton label={c.print} />
      </div>
      <header>
        <p className="eyebrow">{c.title}</p>
        <h1>{profile.fullName}</h1>
        <p className="resume-role">{c.role}</p>
        <p>
          {c.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="resume-links">
          <a href={profile.github}>github.com/Gnichet5</a>
          <a href={profile.linkedin}>linkedin.com/in/guilhermepeniche</a>
        </div>
      </header>
      <section>
        <h2>{c.profile}</h2>
        <p>{c.summary}</p>
      </section>
      <section>
        <h2>{c.experience}</h2>
        <h3>{c.institution}</h3>
        <p className="resume-date">{c.period}</p>
        <ul>
          {c.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{c.projects}</h2>
        {getProjects(locale).map((project) => (
          <div key={project.id} className="resume-project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.githubUrl && (
              <a href={project.githubUrl}>
                {project.githubUrl.replace('https://', '')}
              </a>
            )}
          </div>
        ))}
        <p>
          <strong>{c.recognition}:</strong> {c.award}{' '}
          <a href={profile.article}>DOI: 10.34178/jbth.v9i7.657</a>
        </p>
      </section>
      <section>
        <h2>{c.education}</h2>
        <p>
          <strong>{c.degree}</strong> — Centro Universitário Jorge Amado
          (UNIJORGE).
        </p>
        <p>
          <strong>AWS Certified Cloud Practitioner</strong> — {c.passed}{' '}
          <a href={profile.certification}>{c.credential}</a>.
        </p>
        <p>{c.preparing}</p>
      </section>
      <section>
        <h2>{c.technologies}</h2>
        {getSkills(locale).map((group) => (
          <p key={group.title}>
            <strong>{group.title}:</strong> {group.skills.join(' · ')}
          </p>
        ))}
      </section>
    </main>
  )
}
