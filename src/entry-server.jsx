import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { seoCollector } from './components/Seo'
import { localeCollector, LOCALES, localeHome, guidePath, blogIndexPath, blogPostPath } from './i18n/LocaleContext'
import { POSTS } from './content/blog/registry'

// The full list of routes to prerender — read by scripts/prerender.mjs so
// it never needs updating by hand, both for the prerendered HTML files and
// for the generated sitemap.xml (changefreq/priority travel with each
// route so the sitemap doesn't need separate, easily-stale upkeep — this
// project already once shipped a sitemap missing real routes because it
// was hand-maintained). Blog post routes are derived from the same
// content registry the app itself renders from, so publishing a new post
// (registry.js) automatically prerenders and gets sitemapped too.
export const ROUTES = [
  ...LOCALES.map((locale) => ({ path: localeHome(locale), changefreq: 'weekly', priority: '1.0' })),
  ...LOCALES.map((locale) => ({ path: guidePath(locale), changefreq: 'monthly', priority: '0.8' })),
  ...LOCALES.map((locale) => ({ path: blogIndexPath(locale), changefreq: 'weekly', priority: '0.7' })),
  ...LOCALES.flatMap((locale) =>
    POSTS.map((post) => ({ path: blogPostPath(locale, post.slug), changefreq: 'monthly', priority: '0.6' })),
  ),
  { path: '/privacidade', changefreq: 'monthly', priority: '0.3' },
  { path: '/termos', changefreq: 'monthly', priority: '0.3' },
]

// Used by scripts/prerender.mjs (run against the built dist-ssr bundle),
// one call per route in ROUTES. Reset the collectors first since they're
// plain module-level singletons shared across every render() call in the
// same Node process.
export function render(url) {
  seoCollector.current = null
  localeCollector.current = null

  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )

  return { html, seo: seoCollector.current, lang: localeCollector.current }
}
