import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function HowItWorksSection() {
  const { dict } = useLocale()
  const t = dict.howItWorks

  return (
    <section id="como-funciona" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{t.title}</h2>
      </Reveal>

      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute left-5 top-5 bottom-5 w-px bg-brand-100 sm:left-0 sm:right-0 sm:top-5 sm:h-px sm:w-auto sm:bottom-auto"
        />
        <div className="grid gap-10 sm:grid-cols-3">
          {t.steps.map(({ title, text }, index) => (
            <Reveal key={title} delay={Math.min(index * 0.1, 0.3)} className="relative flex gap-4 sm:block sm:text-center">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white ring-4 ring-[#fffdf9] sm:mx-auto">
                {index + 1}
              </span>
              <div className="sm:mt-4">
                <p className="font-semibold text-zinc-900">{title}</p>
                <p className="mt-1.5 text-sm text-zinc-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.35} className="mt-14 text-center">
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
