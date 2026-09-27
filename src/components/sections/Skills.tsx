import { skillsData, profile } from '@/lib/constants'
export default function Skills() {
  return (
    <section id="skills" className="section-pad section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / REPERTÓRIO</p>
          <h2>
            Tecnologia a serviço
            <br />
            de cada problema.
          </h2>
        </div>
        <p>
          Ferramentas utilizadas em projetos profissionais, pessoais e de
          pesquisa.
        </p>
      </div>
      <div className="skills-grid">
        {skillsData.map((group, i) => (
          <article key={group.title}>
            <span className="label">0{i + 1}</span>
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
          <span className="label">CERTIFICAÇÃO OBTIDA</span>
          <h3>AWS Certified Cloud Practitioner</h3>
          <p>
            Fundamentos de serviços, segurança, arquitetura e custos na nuvem
            AWS.
          </p>
        </div>
        <a
          className="text-link"
          href={profile.certification}
          target="_blank"
          rel="noreferrer"
        >
          Ver credencial ↗
        </a>
      </div>
      <div className="learning-strip">
        <span className="label">EM EVOLUÇÃO</span>
        <div>
          <h3>Infraestrutura e arquitetura em nuvem</h3>
          <p>
            Após a certificação Cloud Practitioner, preparação para AWS
            Certified Solutions Architect – Associate, conectada à experiência
            prática em infraestrutura.
          </p>
        </div>
        <span className="learning-badge">Aprendizado contínuo ↗</span>
      </div>
    </section>
  )
}
