import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import type { Locale } from '@/lib/i18n'
export default function Home({ locale }: { locale: Locale }) {
  return (
    <main id="main-content">
      <Hero locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Contact locale={locale} />
    </main>
  )
}
