import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function FinalCtaSection() {
  const { dict } = useLocale()
  const t = dict.finalCta

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
      <Reveal>
        <p className="text-sm font-medium text-brand-600">{t.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h2>
        <p className="mt-4 text-lg text-gray-600">{t.text}</p>
        <a
          href={SIGNUP_URL}
          className="mt-8 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          {t.cta}
        </a>
        <p className="mt-3 text-xs text-gray-400">{t.finePrint}</p>
      </Reveal>
    </section>
  )
}
