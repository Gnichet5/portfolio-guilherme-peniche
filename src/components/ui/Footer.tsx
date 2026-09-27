import Link from 'next/link'
import { profile } from '@/lib/constants'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <Link className="brand" href="/" aria-label="Guilherme Peniche, início">
          gp<span>.</span>
        </Link>
        <p>
          Guilherme Peniche · Software, dados e IA.
          <br />
          <span>© {new Date().getFullYear()} · Salvador, Bahia</span>
        </p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="/curriculo">Currículo ↗</a>
        </div>
      </div>
    </footer>
  )
}
