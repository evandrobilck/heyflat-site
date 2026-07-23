import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function HowItWorksSection() {
  const { dict } = useLocale()
  const t = dict.howItWorks

  return (
    <section id="como-funciona" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h2>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {t.steps.map(({ title, text }, index) => (
          <Reveal key={title} delay={Math.min(index * 0.1, 0.3)} className="text-center">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <p className="mt-4 font-semibold text-gray-900">{title}</p>
            <p className="mt-2 text-sm text-gray-600">{text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.35} className="mt-12 text-center">
        <a
          href={SIGNUP_URL}
          className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          {t.cta}
        </a>
      </Reveal>
    </section>
  )
}
