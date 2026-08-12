import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

const BADGE_STYLES = {
  monthly: '',
  semiannual: 'bg-emerald-400 text-emerald-900',
  annual: 'bg-amber-400 text-amber-900',
}

const CARD_STYLES = {
  monthly: 'border border-gray-100',
  semiannual: 'border border-gray-100',
  annual: 'border-2 border-amber-400 shadow-2xl',
}

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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.plans.map((plan, index) => (
            <Reveal
              key={plan.id}
              delay={0.1 + index * 0.05}
              y={16}
              className={`relative rounded-2xl bg-white p-8 text-left shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${CARD_STYLES[plan.id]}`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${BADGE_STYLES[plan.id]}`}
                >
                  {plan.badge}
                </span>
              )}
              <p className="text-sm font-semibold text-brand-700">{plan.name}</p>
              <p className="mt-2 flex items-baseline gap-2">
                {plan.fullPrice && <span className="text-lg text-gray-400 line-through">{plan.fullPrice}</span>}
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </p>
              {plan.note && <p className="mt-1 text-xs text-gray-400">{plan.note}</p>}
              <p className="mt-3 text-sm font-medium text-green-600">{t.trial}</p>

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
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brand-100">{t.finePrint}</p>
      </div>
    </section>
  )
}
