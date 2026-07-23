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

const LocaleContext = createContext(null)

export function LocaleProvider({ locale, children }) {
  const dict = DICTS[locale] ?? DICTS[DEFAULT_LOCALE]

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
