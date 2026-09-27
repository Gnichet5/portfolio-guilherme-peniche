import {
  ArrowUpRight,
  BriefcaseBusiness,
  Database,
  Layers3,
  Cloud,
} from 'lucide-react'

export default function Experience() {
  const areas = [
    {
      icon: Layers3,
      title: 'Sistemas corporativos',
      text: 'Desenvolvimento, modernização e manutenção de aplicações para acompanhamento institucional e rotinas administrativas.',
    },
    {
      icon: Database,
      title: 'Dados e relatórios',
      text: 'Dashboards gerenciais, relatórios municipais e estaduais, modelagem e migração de dados com PostgreSQL e MySQL.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Da demanda à entrega',
      text: 'Análise de requisitos, construção de módulos para coordenadorias e correção de problemas em produção.',
    },
    {
      icon: Cloud,
      title: 'Novos caminhos em infraestrutura',
      text: 'Participações pontuais em infraestrutura, conectando a prática profissional aos estudos de arquitetura na AWS.',
    },
  ]
  return (
    <section id="experience" className="section-pad section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / EXPERIÊNCIA</p>
          <h2>
            Software no contexto
            <br />
            do trabalho real.
          </h2>
        </div>
        <p>
          Aplicações que apoiam a gestão pública e evoluem junto com as
          necessidades de quem as utiliza.
        </p>
      </div>
      <div className="experience-layout">
        <div className="experience-identity">
          <span className="label">2025 — ATUAL</span>
          <h3>
            SERIN<span> / BA</span>
          </h3>
          <p>
            Secretaria de Relações
            <br />
            Institucionais da Bahia
          </p>
          <span className="experience-role">Desenvolvimento de sistemas</span>
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
          {areas.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={22} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
