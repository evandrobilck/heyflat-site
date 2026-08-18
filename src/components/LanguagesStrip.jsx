import Reveal from './Reveal'
import FlagIcon from './FlagIcon'
import { useLocale, localeHome, LOCALES } from '../i18n/LocaleContext'

const LANG_LABEL = { pt: 'Português', en: 'English', es: 'Español' }

export default function LanguagesStrip() {
  const { locale, dict } = useLocale()

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <Reveal>
          <p className="text-sm font-medium text-zinc-500">{dict.languagesStrip.text}</p>
        </Reveal>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          {LOCALES.map((code, index) => {
            const isActive = code === locale
            return (
              <Reveal key={code} delay={0.08 * index} y={12}>
                <a
                  href={localeHome(code)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${
                    isActive
                      ? 'border-brand-300 bg-brand-50 text-brand-700'
                      : 'border-zinc-200 bg-white text-zinc-700 hover:border-brand-200'
                  }`}
                >
                  <FlagIcon code={code} className="h-4 w-5" />
                  {LANG_LABEL[code]}
                </a>
              </Reveal>
            )
          })}
          <Reveal delay={0.08 * LOCALES.length} y={12}>
            <span className="flex items-center gap-2 rounded-full border border-dashed border-brand-300 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              {dict.languagesStrip.more}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
