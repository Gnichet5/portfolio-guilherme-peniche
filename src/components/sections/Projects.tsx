import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/constants'
import { getProjects, getExperiments } from '@/lib/content'
import { copy } from '@/lib/copy'
import type { Locale } from '@/lib/i18n'
import ProjectCard from '@/components/ui/ProjectCard'
export default function Projects({ locale }: { locale: Locale }) {
  const c = copy[locale].projects
  const experiments = getExperiments(locale)
  return (
    <section id="projects" className="section-pad projects-section">
      <div className="section-shell">
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
        <div className="projects-grid">
          {getProjects(locale).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              locale={locale}
            />
          ))}
        </div>
        <details className="experiments">
          <summary>
            {c.other}
            <span>
              {experiments.length.toString().padStart(2, '0')} /{' '}
              <span className="expand-sign">+</span>
            </span>
          </summary>
          <div className="experiments-grid">
            {experiments.map((project) => (
              <article key={project.title}>
                <span className="label">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.href && (
                  <a
                    className="text-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.viewCode} <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </details>
        <a
          className="github-all text-link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          {c.more} <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}
