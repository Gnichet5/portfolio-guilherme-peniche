import { ArrowUpRight } from 'lucide-react'
import { projects, experiments, profile } from '@/lib/constants'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-pad projects-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / PROJETOS SELECIONADOS</p>
            <h2>
              Ideias que ganharam
              <br />
              forma e código.
            </h2>
          </div>
          <p>
            Uma seleção de aplicações, experimentos e pesquisa. Cada projeto, um
            problema diferente para resolver.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <details className="experiments">
          <summary>
            Outros projetos e experimentos{' '}
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
                    Ver código <ArrowUpRight size={16} />
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
          Mais no GitHub <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}
