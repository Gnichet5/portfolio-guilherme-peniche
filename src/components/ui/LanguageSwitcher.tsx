'use client'
import { usePathname } from 'next/navigation'
import {
  localeCookie,
  locales,
  switchLanguagePath,
  type Locale,
} from '@/lib/i18n'
import { copy } from '@/lib/copy'
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const c = copy[locale].nav
  return (
    <div className="language-switcher" role="group" aria-label={c.language}>
      {locales.map((target) => (
        <a
          key={target}
          href={switchLanguagePath(pathname, target)}
          hrefLang={target === 'pt' ? 'pt-BR' : 'en'}
          lang={target === 'pt' ? 'pt-BR' : 'en'}
          aria-label={c[target]}
          aria-current={locale === target ? 'true' : undefined}
          onClick={(event) => {
            document.cookie = `${localeCookie}=${target}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`
            event.currentTarget.href =
              switchLanguagePath(pathname, target) +
              window.location.search +
              window.location.hash
          }}
        >
          {target.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
