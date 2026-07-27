import { createContext, useContext, useEffect } from 'react'
import en from './en'
import pt from './pt'
import es from './es'

export const LOCALES = ['en', 'pt', 'es']
export const DEFAULT_LOCALE = 'en'

const DICTS = { en, pt, es }

// Home path per locale: English lives at the site root, pt/es are prefixed.
export function localeHome(locale) {
  return locale === 'en' ? '/' : `/${locale}`
}

// Guide page path per locale, same prefixing convention as localeHome.
export function guidePath(locale) {
  return locale === 'en' ? '/guia' : `/${locale}/guia`
}

// Blog index path per locale, same prefixing convention as localeHome.
export function blogIndexPath(locale) {
  return locale === 'en' ? '/blog' : `/${locale}/blog`
}

// Blog post path per locale — slugs are shared across locales (only the
// prefix changes), matching guidePath's convention.
export function blogPostPath(locale, slug) {
  return `${blogIndexPath(locale)}/${slug}`
}

const LocaleContext = createContext(null)

// Read by scripts/prerender.mjs right after renderToString(): the <html
// lang> attribute is otherwise only set client-side via the effect below,
// which never runs during SSR.
export const localeCollector = { current: null }

export function LocaleProvider({ locale, children }) {
  const dict = DICTS[locale] ?? DICTS[DEFAULT_LOCALE]

  if (typeof window === 'undefined') {
    localeCollector.current = locale
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : locale
  }, [locale])

  function href(hash) {
    const base = localeHome(locale)
    return hash ? `${base}#${hash}` : base
  }

  return <LocaleContext.Provider value={{ locale, dict, href }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
