import { ArrowUpRight, Award } from 'lucide-react'
import { profile } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" className="section-pad research-section">
      <div className="section-shell research-layout">
        <div>
          <p className="eyebrow">03 / PESQUISA E TRAJETÓRIA</p>
          <h2>
            Curiosidade que
            <br />
            vira investigação.
          </h2>
          <p className="section-intro">
            Sou bacharel em Ciência da Computação pela UNIJORGE. Minha
            trajetória conecta desenvolvimento de software, análise de dados e
            pesquisa aplicada em inteligência artificial.
          </p>
          <p className="body-copy">
            Gosto de entender o problema por trás de cada demanda e transformar
            esse contexto em aplicações úteis. Hoje, amplio essa visão com
            estudos de cloud e participação em atividades de infraestrutura.
          </p>
        </div>
        <article className="research-card">
          <div className="research-card-top">
            <Award size={28} strokeWidth={1.5} />
            <span>XI SIINTEC · 2025</span>
          </div>
          <p className="label">RECONHECIMENTO</p>
          <h3>Melhor trabalho</h3>
          <p>Tecnologias Digitais e Computação de Alto Desempenho</p>
          <div className="research-divider" />
          <h4>
            Otimização de código para escalabilidade de agentes de Deep
            Reinforcement Learning
          </h4>
          <p className="research-caption">
            Pesquisa em processos industriais estocásticos. Publicação no
            Journal of Bioengineering, Technologies and Health em 2026.
          </p>
          <a
            className="text-link"
            href={profile.article}
            target="_blank"
            rel="noreferrer"
          >
            Ler artigo publicado <ArrowUpRight size={18} />
          </a>
        </article>
      </div>
    </section>
  )
}
