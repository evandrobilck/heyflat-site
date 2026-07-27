import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const SITE_URL = 'https://heyflat.com.au'

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render, ROUTES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')))

const sitemapEntries = []

for (const route of ROUTES) {
  const { html, seo, lang } = render(route.path)
  const page = applyHead(template, { html, seo, lang })

  const outPath =
    route.path === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.path.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${route.path} -> ${path.relative(root, outPath)}`)

  sitemapEntries.push({
    loc: `${SITE_URL}${route.path}`,
    changefreq: route.changefreq,
    priority: route.priority,
    alternates: seo?.alternates ?? [],
  })
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(sitemapEntries))
console.log(`generated sitemap.xml (${sitemapEntries.length} routes)`)

fs.rmSync(ssrDir, { recursive: true, force: true })

// Reuses the exact same seo.alternates each route already computed for its
// own <head> hreflang tags, instead of a second hand-maintained mapping —
// this is the piece that previously drifted out of sync (see project
// memory: sitemap.xml once shipped without the guide routes at all).
function buildSitemap(entries) {
  const urls = entries
    .map(({ loc, changefreq, priority, alternates }) => {
      const alternateLinks = alternates
        .map(
          ({ lang: hreflang, path: altPath }) =>
            `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${SITE_URL}${altPath}" />`,
        )
        .join('\n')
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        alternateLinks,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Swaps the text between two fixed markers, via a replacer function so the
// injected value is inserted literally — a template-string replacement
// would let a literal "$1"/"$2" inside seo.title/description (e.g. "AU$15")
// get misinterpreted by String.replace() as a backreference.
function swap(str, regex, value) {
  return str.replace(regex, (_match, before, after) => `${before}${value}${after}`)
}

function applyHead(tpl, { html, seo, lang }) {
  let out = tpl.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  if (lang) {
    out = out.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
  }

  if (seo?.title) {
    const title = escapeHtml(seo.title)
    out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    out = swap(out, /(<meta property="og:title" content=")[^"]*(")/, title)
    out = swap(out, /(<meta name="twitter:title" content=")[^"]*(")/, title)
  }

  if (seo?.description) {
    const description = escapeHtml(seo.description)
    out = swap(out, /(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/, description)
    out = swap(out, /(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/>)/, description)
    out = swap(out, /(<meta\s+name="twitter:description"\s+content=")[^"]*("\s*\/>)/, description)
  }

  if (seo?.path) {
    const url = `${SITE_URL}${seo.path}`
    out = swap(out, /(<link rel="canonical" href=")[^"]*(")/, url)
    out = swap(out, /(<meta property="og:url" content=")[^"]*(")/, url)
  }

  // Always strip the template's own (English-homepage) hreflang set first —
  // pages with no alternates (Privacy/Terms) must not inherit stale ones.
  const alternateBlock = (seo?.alternates ?? [])
    .map(({ lang: hreflang, path: altPath }) => `    <link rel="alternate" hreflang="${hreflang}" href="${SITE_URL}${altPath}" />`)
    .join('\n')
  out = out.replace(
    /(\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>\n?)+/,
    alternateBlock ? `\n${alternateBlock}\n` : '\n',
  )

  return out
}
