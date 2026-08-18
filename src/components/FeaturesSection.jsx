import {
  Receipt,
  CheckSquare,
  ShoppingCart,
  CalendarBlank,
  Bell,
  ChartBar,
  House,
  Wrench,
  ClipboardText,
  DeviceMobile,
  Check,
} from '@phosphor-icons/react'
import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const ICONS = {
  balance: Receipt,
  hallOfFame: CheckSquare,
  shopping: ShoppingCart,
  calendar: CalendarBlank,
  reminder: Bell,
  reports: ChartBar,
  house: House,
  maintenance: Wrench,
  inspection: ClipboardText,
  devices: DeviceMobile,
}

const TINTED_CELLS = new Set([2, 6])

function BalancePreview({ t }) {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-3">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
        <p className="text-[10px] font-medium text-amber-800">{t.youOwe}</p>
        <p className="text-lg font-semibold text-amber-700">AU$ 120</p>
      </div>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
        <p className="text-[10px] font-medium text-emerald-800">{t.owedToYou}</p>
        <p className="text-lg font-semibold text-emerald-700">AU$ 45</p>
      </div>
    </div>
  )
}

// Renders a clean first sentence for compact cards, and strips the em-dash
// asides some longer descriptions use, since this component's job is to show
// short, glance-able copy rather than the full paragraph from the dictionary.
function firstSentence(description) {
  return description.split('. ')[0].replace(/\s+—\s+/g, ', ') + '.'
}

export default function FeaturesSection() {
  const { dict } = useLocale()
  const t = dict.features
  const [lead, ...rest] = t.items

  return (
    <section id="recursos" className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{t.title}</h2>
        <p className="mt-3 text-zinc-500">{t.subtitle}</p>
      </Reveal>

      <div className="mt-14 grid items-center gap-10 rounded-2xl border border-zinc-200 bg-white p-8 md:grid-cols-2 md:gap-16 md:p-12">
        <Reveal className="flex justify-center" x={-40} y={0}>
          <BalancePreview t={dict.previews[lead.preview]} />
        </Reveal>
        <Reveal x={40} y={0} delay={0.1}>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
            <Receipt weight="fill" className="h-6 w-6 text-brand-600" />
          </span>
          <h3 className="mt-4 text-2xl font-bold text-zinc-900">{lead.title}</h3>
          <p className="mt-3 text-zinc-600">{lead.description.replace(/\s+—\s+/g, ', ')}</p>
          <ul className="mt-4 space-y-2">
            {lead.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-zinc-600">
                <Check weight="bold" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map(({ title, description, preview }, index) => {
          const Icon = ICONS[preview]
          const tinted = TINTED_CELLS.has(index)
          return (
            <Reveal
              key={title}
              delay={Math.min(index * 0.05, 0.3)}
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                tinted ? 'border-brand-100 bg-brand-50/50 hover:border-brand-200' : 'border-zinc-200 bg-white hover:border-brand-200'
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  tinted ? 'bg-brand-600' : 'bg-brand-50'
                }`}
              >
                <Icon weight={tinted ? 'fill' : 'regular'} className={`h-5 w-5 ${tinted ? 'text-white' : 'text-brand-600'}`} />
              </span>
              <h3 className="mt-4 font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{firstSentence(description)}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
