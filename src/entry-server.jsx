import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { seoCollector } from './components/Seo'
import { localeCollector } from './i18n/LocaleContext'

// Used by scripts/prerender.mjs (run against the built dist-ssr bundle),
// one call per known route. Reset the collectors first since they're
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
