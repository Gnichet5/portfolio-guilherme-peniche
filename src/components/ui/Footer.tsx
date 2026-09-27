import Link from 'next/link'
import { profile } from '@/lib/constants'
import { copy } from '@/lib/copy'
import { localizedPath, type Locale } from '@/lib/i18n'
export default function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale]
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <Link
          className="brand"
          href={localizedPath(locale)}
          aria-label={c.nav.home}
        >
          gp<span>.</span>
        </Link>
        <p>
          Guilherme Peniche · {c.footer.description}
          <br />
          <span>
            © {new Date().getFullYear()} · {c.footer.location}
          </span>
        </p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <Link href={localizedPath(locale, { kind: 'resume' })}>
            {c.footer.resume} ↗
          </Link>
        </div>
      </div>
    </footer>
  )
}
