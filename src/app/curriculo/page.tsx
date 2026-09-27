import Link from 'next/link'
import type { Metadata } from 'next'
import { profile, projects, skillsData } from '@/lib/constants'
import PrintButton from './PrintButton'
export const metadata: Metadata = {
  title: 'Currículo',
  alternates: { canonical: '/curriculo' },
}
export default function Resume() {
  return (
    <main id="main-content" className="resume section-shell">
      <div className="resume-top">
        <Link className="text-link" href="/">
          ← Voltar ao portfólio
        </Link>
        <PrintButton />
      </div>
      <header>
        <p className="eyebrow">CURRÍCULO</p>
        <h1>{profile.fullName}</h1>
        <p className="resume-role">Desenvolvedor Full Stack · IA aplicada</p>
        <p>
          Salvador, Bahia ·{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="resume-links">
          <a href={profile.github}>github.com/Gnichet5</a>
          <a href={profile.linkedin}>linkedin.com/in/guilhermepeniche</a>
        </div>
      </header>
      <section>
        <h2>Perfil</h2>
        <p>
          Bacharel em Ciência da Computação com atuação no desenvolvimento e
          modernização de sistemas corporativos, dashboards e aplicações web.
          Experiência em projetos de machine learning, automação e pesquisa em
          Deep Reinforcement Learning.
        </p>
      </section>
      <section>
        <h2>Experiência profissional</h2>
        <h3>SERIN — Secretaria de Relações Institucionais da Bahia</h3>
        <p className="resume-date">
          Desenvolvimento de sistemas · 2025 — atual
        </p>
        <ul>
          <li>
            Desenvolvimento, modernização e manutenção de aplicações
            corporativas e módulos para coordenadorias.
          </li>
          <li>
            Dashboards e relatórios gerenciais para acompanhamento institucional
            municipal e estadual.
          </li>
          <li>
            Análise de requisitos, correção de problemas em produção e modelagem
            e migração de dados.
          </li>
          <li>
            Atuação com Laravel, Vue.js, Inertia.js, React, Next.js, PostgreSQL
            e MySQL.
          </li>
          <li>
            Participações pontuais em infraestrutura, alinhadas aos estudos de
            arquitetura em nuvem.
          </li>
        </ul>
      </section>
      <section>
        <h2>Projetos e pesquisa</h2>
        {projects.map((project) => (
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
          <strong>Reconhecimento:</strong> melhor trabalho em Tecnologias
          Digitais e Computação de Alto Desempenho no XI SIINTEC (2025). Artigo
          publicado no JBTH (2026).{' '}
          <a href={profile.article}>DOI: 10.34178/jbth.v9i7.657</a>
        </p>
      </section>
      <section>
        <h2>Formação e desenvolvimento</h2>
        <p>
          <strong>Bacharelado em Ciência da Computação</strong> — Centro
          Universitário Jorge Amado (UNIJORGE).
        </p>
        <p>
          <strong>AWS Certified Cloud Practitioner</strong> — certificação
          obtida por exame.{' '}
          <a href={profile.certification}>Ver credencial no Credly</a>.
        </p>
        <p>Preparação para AWS Certified Solutions Architect – Associate.</p>
      </section>
      <section>
        <h2>Tecnologias</h2>
        {skillsData.map((group) => (
          <p key={group.title}>
            <strong>{group.title}:</strong> {group.skills.join(' · ')}
          </p>
        ))}
      </section>
    </main>
  )
}
