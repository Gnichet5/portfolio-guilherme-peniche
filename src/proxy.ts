import { NextRequest, NextResponse } from 'next/server'
import {
  detectLocale,
  isLocale,
  legacyPage,
  localeCookie,
  localizedPath,
} from './lib/i18n'
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (isLocale(pathname.split('/')[1])) return NextResponse.next()
  const page = legacyPage(pathname)
  if (!page) return NextResponse.next()
  const locale = detectLocale(
    request.headers.get('accept-language'),
    request.cookies.get(localeCookie)?.value,
  )
  const url = request.nextUrl.clone()
  url.pathname = localizedPath(locale, page)
  const response = NextResponse.redirect(url, 307)
  response.headers.set('Vary', 'Accept-Language, Cookie')
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}
export const config = {
  matcher: [
    '/',
    '/curriculo',
    '/resume',
    '/projetos/:path*',
    '/projects/:path*',
  ],
}
