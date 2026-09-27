'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { title: 'Experiência', id: 'experience' },
  { title: 'Projetos', id: 'projects' },
  { title: 'Trajetória', id: 'about' },
  { title: 'Tecnologias', id: 'skills' },
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePathname()
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    if (pathname !== '/') return
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
  }, [pathname])
  const href = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`)
  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Navegação principal">
          <Link
            className="brand"
            href="/"
            aria-label="Guilherme Peniche, início"
            onClick={() => setOpen(false)}
          >
            gp<span>.</span>
          </Link>
          <div className="desktop-nav">
            {links.map((link) => (
              <a
                key={link.id}
                href={href(link.id)}
                aria-current={
                  pathname === '/' && active === link.id
                    ? 'location'
                    : undefined
                }
              >
                {link.title}
              </a>
            ))}
          </div>
          <a className="nav-contact" href={href('contact')}>
            Vamos conversar <ArrowUpRight size={16} />
          </a>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <div id="mobile-menu" className="mobile-nav" hidden={!open}>
            {links.map((link) => (
              <a
                key={link.id}
                href={href(link.id)}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a href={href('contact')} onClick={() => setOpen(false)}>
              Vamos conversar ↗
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
