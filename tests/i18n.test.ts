import test from 'node:test'
import assert from 'node:assert/strict'
import { NextRequest } from 'next/server'
import { proxy } from '../src/proxy'
import {
  detectLocale,
  identifyPage,
  localizedPath,
  projectSlugs,
  switchLanguagePath,
  locales,
} from '../src/lib/i18n'
import { getProjects, getExperiments } from '../src/lib/content'
import { POST } from '../src/app/api/contact/route'
import sitemap from '../src/app/sitemap'

test('language negotiation honors saved choice and weighted browser preferences', () => {
  assert.equal(detectLocale('en-US,en;q=0.9,pt;q=0.8'), 'en')
  assert.equal(detectLocale('pt-BR,pt;q=0.9,en;q=0.8'), 'pt')
  assert.equal(detectLocale('pt;q=0.2,en;q=0.9'), 'en')
  assert.equal(detectLocale('fr-FR,EN-gb;q=0.8'), 'en')
  assert.equal(detectLocale('en;q=0,pt;q=1'), 'pt')
  assert.equal(detectLocale('en;q=nope,pt'), 'pt')
  assert.equal(detectLocale('en', 'pt'), 'pt')
  assert.equal(detectLocale('pt', 'en'), 'en')
  assert.equal(detectLocale(null), 'pt')
  assert.equal(detectLocale('fr', 'invalid'), 'pt')
})
test('every project and resume can switch languages and back', () => {
  for (const locale of locales) {
    const other = locale === 'en' ? 'pt' : 'en'
    for (const page of [
      { kind: 'home' as const },
      { kind: 'resume' as const },
      ...Object.keys(projectSlugs).map((id) => ({
        kind: 'project' as const,
        id,
      })),
    ]) {
      const path = localizedPath(locale, page)
      assert.deepEqual(identifyPage(locale, path.split('/').slice(2)), page)
      const translated = switchLanguagePath(path, other)
      assert.equal(translated, localizedPath(other, page))
      assert.equal(switchLanguagePath(translated, locale), path)
    }
  }
  assert.equal(identifyPage('en', ['projects', 'unknown']), null)
  assert.equal(identifyPage('en', ['curriculo']), null)
})
test('entry redirect honors cookie, preserves query, and never overrides explicit English links', () => {
  const root = proxy(
    new NextRequest('https://example.com/?utm_source=linkedin', {
      headers: { 'accept-language': 'en-US' },
    }),
  )
  assert.equal(root.status, 307)
  assert.equal(
    root.headers.get('location'),
    'https://example.com/en?utm_source=linkedin',
  )
  assert.match(root.headers.get('cache-control')!, /no-store/)
  const saved = proxy(
    new NextRequest('https://example.com/', {
      headers: { 'accept-language': 'en-US', cookie: 'portfolio_language=pt' },
    }),
  )
  assert.equal(saved.headers.get('location'), 'https://example.com/pt')
  const explicit = proxy(
    new NextRequest('https://example.com/en/projects/fraud-detection', {
      headers: { cookie: 'portfolio_language=pt' },
    }),
  )
  assert.equal(explicit.headers.get('location'), null)
  const legacy = proxy(
    new NextRequest('https://example.com/projetos/deteccao-de-fraudes', {
      headers: { 'accept-language': 'en' },
    }),
  )
  assert.equal(
    legacy.headers.get('location'),
    'https://example.com/en/projects/fraud-detection',
  )
  const api = proxy(new NextRequest('https://example.com/api/contact'))
  assert.equal(api.headers.get('location'), null)
})
test('translations retain project identities and source links', () => {
  const pt = getProjects('pt')
  const en = getProjects('en')
  assert.equal(en.length, pt.length)
  for (const [index, project] of en.entries()) {
    assert.equal(project.id, pt[index].id)
    assert.equal(project.githubUrl, pt[index].githubUrl)
    assert.notEqual(project.description, pt[index].description)
    assert.ok(project.contribution.length > 30)
  }
  assert.equal(getExperiments('en').length, getExperiments('pt').length)
})
test('sitemap includes both languages and reciprocal alternates for all pages', () => {
  const entries = sitemap()
  assert.equal(entries.length, 12)
  for (const entry of entries) {
    assert.ok(entry.alternates?.languages?.['pt-BR'])
    assert.ok(entry.alternates?.languages?.en)
  }
})
test('API validation errors follow the active form language without sending email', async () => {
  for (const [locale, expected] of [
    ['en', 'Please complete all fields.'],
    ['pt', 'Preencha todos os campos.'],
  ]) {
    const response = await POST(
      new Request('http://localhost:3011/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept-language': locale,
        },
        body: '{}',
      }),
    )
    assert.equal(response.status, 400)
    assert.equal((await response.json()).error, expected)
  }
})
