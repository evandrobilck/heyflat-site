import { useLocale, localeHome, LOCALES } from '../i18n/LocaleContext'
import FlagIcon from './FlagIcon'

const LOGIN_URL = import.meta.env.VITE_APP_LOGIN_URL
const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

const LANG_LABEL = { en: 'Language', pt: 'Idioma', es: 'Idioma' }

export default function Header() {
  const { locale, dict, href } = useLocale()
  const { nav } = dict.header

  const NAV_LINKS = [
    { href: href(), label: nav.home },
    { href: href('como-funciona'), label: nav.howItWorks },
    { href: href('recursos'), label: nav.features },
    { href: href('preco'), label: nav.price },
    { href: href('faq'), label: nav.faq },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href={localeHome(locale)} className="flex items-center gap-2">
          <img src="/logo-purple.svg" alt="HeyFlat" className="h-10 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {NAV_LINKS.map(({ href: linkHref, label }) => (
            <a key={linkHref} href={linkHref} className="hover:text-brand-600">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 py-1 pl-2 pr-1">
            <span className="hidden text-xs font-medium text-gray-400 sm:inline">{LANG_LABEL[locale]}</span>
            <div className="flex items-center gap-1">
              {LOCALES.map((code) => (
                <a
                  key={code}
                  href={localeHome(code)}
                  aria-label={code}
                  className={`flex h-7 w-7 items-center justify-center rounded ${
                    code === locale ? 'ring-1 ring-brand-300' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <FlagIcon code={code} className="h-4 w-5" />
                </a>
              ))}
            </div>
          </div>
          <a
            href={LOGIN_URL}
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 md:px-4"
          >
            {dict.header.login}
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 md:px-4"
          >
            {dict.header.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
