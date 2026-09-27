'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { localizedPath, type Locale } from '@/lib/i18n'
import { copy } from '@/lib/copy'
import LanguageSwitcher from './LanguageSwitcher'
const sections = ['experience', 'projects', 'about', 'skills'] as const
export default function Navbar({ locale }: { locale: Locale }) {
  const c = copy[locale].nav
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePathname()
  const home = localizedPath(locale)
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
  useEffect(() => {
    if (pathname !== home) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -60% 0px' },
    )
    document
      .querySelectorAll('main > section[id]')
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname, home])
  const href = (id: string) => `${pathname === home ? '' : home}#${id}`
  return (
    <>
      <a className="skip-link" href="#main-content">
        {c.skip}
      </a>
      <header className="site-header">
        <nav className="nav-shell" aria-label={c.label}>
          <Link
            className="brand"
            href={home}
            aria-label={c.home}
            onClick={() => setOpen(false)}
          >
            gp<span>.</span>
          </Link>
          <div className="desktop-nav">
            {sections.map((id) => (
              <a
                key={id}
                href={href(id)}
                aria-current={
                  pathname === home && active === id ? 'location' : undefined
                }
              >
                {c[id]}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="nav-contact" href={href('contact')}>
              {c.contact} <ArrowUpRight size={16} />
            </a>
            <LanguageSwitcher locale={locale} />
            <button
              id="menu-toggle"
              className="menu-toggle"
              aria-label={open ? c.close : c.open}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          <div id="mobile-menu" className="mobile-nav" hidden={!open}>
            {sections.map((id) => (
              <a key={id} href={href(id)} onClick={() => setOpen(false)}>
                {c[id]}
              </a>
            ))}
            <a href={href('contact')} onClick={() => setOpen(false)}>
              {c.contact} ↗
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
