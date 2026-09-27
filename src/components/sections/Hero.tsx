import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/constants'
import { localizedPath, type Locale } from '@/lib/i18n'
import { copy } from '@/lib/copy'
export default function Hero({ locale }: { locale: Locale }) {
  const c = copy[locale].hero
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> {c.eyebrow}
        </p>
        <h1>
          Guilherme
          <br />
          <span>Peniche.</span>
        </h1>
        <p className="hero-role">
          {c.role[0]}
          <br />
          {c.role[1]}
        </p>
        <p className="hero-description">{c.description}</p>
        <div className="button-row">
          <a className="button button-primary" href="#projects">
            {c.work} <ArrowUpRight size={18} />
          </a>
          <Link
            className="text-link"
            href={localizedPath(locale, { kind: 'resume' })}
          >
            {c.resume} <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="hero-location">
          <span>{c.location}</span>
          <span className="small-divider" />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="hero-board" aria-label={c.areas}>
        <div className="board-header">
          <span className="board-mark">GP /</span>
          <span>{c.building}</span>
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
            <span className="board-index">{c.focus}</span>
            <p>
              {c.board[0]}
              <br />
              {c.board[1]}
            </p>
          </div>
          <ArrowUpRight size={32} strokeWidth={1} />
        </div>
        <div className="board-tags">
          <span>Full Stack</span>
          <span>{c.ai}</span>
          <span>AWS Cloud Practitioner</span>
        </div>
      </div>
      <div className="hero-foot">
        <span>{c.context}</span>
        <a href="#experience">{c.explore} ↓</a>
      </div>
    </section>
  )
}
