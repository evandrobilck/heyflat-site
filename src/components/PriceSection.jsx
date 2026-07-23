import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function PriceSection() {
  const { dict } = useLocale()
  const t = dict.price

  return (
    <section id="preco" className="bg-gradient-to-br from-brand-600 to-brand-800 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-brand-100">{t.subtitle}</p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-sm rounded-2xl bg-white p-8 text-left shadow-xl">
          <p className="text-sm font-semibold text-brand-700">{t.planName}</p>
          <p className="mt-2">
            <span className="text-4xl font-extrabold text-gray-900">{t.price}</span>
            <span className="text-sm text-gray-500">{t.period}</span>
          </p>
          <p className="mt-1 text-sm font-medium text-green-600">{t.trial}</p>

          <ul className="mt-6 space-y-3">
            {t.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-brand-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={SIGNUP_URL}
            className="mt-8 block rounded-lg bg-brand-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            {t.cta}
          </a>
          <p className="mt-3 text-center text-xs text-gray-400">{t.finePrint}</p>
        </Reveal>
      </div>
    </section>
  )
}
