import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/constants'

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> SOFTWARE, DADOS E POSSIBILIDADES
        </p>
        <h1>
          Guilherme
          <br />
          <span>Peniche.</span>
        </h1>
        <p className="hero-role">
          Desenvolvedor Full Stack
          <br />
          com atuação em IA aplicada.
        </p>
        <p className="hero-description">
          Desenvolvo sistemas corporativos, dashboards e aplicações com
          inteligência artificial. Da necessidade de negócio ao software em uso.
        </p>
        <div className="button-row">
          <a className="button button-primary" href="#projects">
            Conheça meu trabalho <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="/curriculo">
            Ver currículo <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="hero-location">
          <span>Salvador, Bahia</span>
          <span className="small-divider" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="hero-board" aria-label="Áreas de atuação">
        <div className="board-header">
          <span className="board-mark">GP /</span>
          <span>EM CONSTRUÇÃO CONSTANTE</span>
        </div>
        <div className="orbit-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-core">
            gp<span>.</span>
          </div>
          <span className="orbit-point point-one" />
          <span className="orbit-point point-two" />
        </div>
        <div className="board-bottom">
          <div>
            <span className="board-index">01 — ATUAÇÃO</span>
            <p>
              Sistemas que conectam
              <br />
              pessoas e informação.
            </p>
          </div>
          <ArrowUpRight size={32} strokeWidth={1} />
        </div>
        <div className="board-tags">
          <span>Full Stack</span>
          <span>Inteligência Artificial</span>
          <span>AWS Cloud Practitioner</span>
        </div>
      </div>
      <div className="hero-foot">
        <span>DESENVOLVIMENTO COM CONTEXTO</span>
        <a href="#experience">Explore a trajetória ↓</a>
      </div>
    </section>
  )
}
