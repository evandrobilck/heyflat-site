import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

function BalancePreview({ t }) {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-3">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
        <p className="text-[10px] font-medium text-amber-800">{t.youOwe}</p>
        <p className="text-lg font-semibold text-amber-700">AU$ 120</p>
      </div>
      <div className="rounded-xl border border-green-200 bg-green-50 p-3">
        <p className="text-[10px] font-medium text-green-800">{t.owedToYou}</p>
        <p className="text-lg font-semibold text-green-700">AU$ 45</p>
      </div>
    </div>
  )
}

function HallOfFamePreview({ t }) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-5 text-center text-white">
        <p className="text-xs font-medium text-white/80">{t.badge}</p>
        <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-base font-semibold">
          EB
        </div>
        <p className="mt-2 text-sm font-semibold">{t.name}</p>
        <p className="text-xs text-white/80">{t.tasksDone}</p>
      </div>
    </div>
  )
}

function ShoppingPreview({ t }) {
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 shrink-0 rounded-full border-2 border-gray-300" />
        <p className="text-xs text-gray-700">{t.item1}</p>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="h-2 w-2">
            <path d="m5 12 5 5L19 7" />
          </svg>
        </span>
        <p className="text-xs text-gray-400 line-through">{t.item2}</p>
        <span className="ml-auto text-xs font-medium text-gray-500">AU$ 8</span>
      </div>
    </div>
  )
}

function CalendarPreview() {
  const days = Array.from({ length: 21 }, (_, i) => i + 1)
  const billDays = [7, 14, 21]
  const taskDays = [5, 12, 20]
  return (
    <div className="w-full max-w-xs rounded-xl border border-gray-200 bg-white p-4">
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day) => (
          <div key={day} className="flex flex-col items-center gap-0.5 py-1 text-[10px] text-gray-600">
            <span>{day}</span>
            <span className="flex h-1 gap-0.5">
              {billDays.includes(day) && <span className="h-1 w-1 rounded-full bg-brand-500" />}
              {taskDays.includes(day) && <span className="h-1 w-1 rounded-full bg-blue-500" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsPreview() {
  const bars = [40, 70, 55, 90, 65]
  return (
    <div className="flex w-full max-w-xs items-end gap-2 rounded-xl border border-gray-200 bg-white p-4">
      {bars.map((height, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-brand-400" style={{ height: `${height}px` }} />
      ))}
    </div>
  )
}

function ReminderPreview({ t }) {
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold text-gray-900">{t.billLabel}</p>
      <div className="flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-2">
        <span className="text-sm">📧</span>
        <p className="text-xs text-gray-600">{t.reminder1}</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-2">
        <span className="text-sm">🔔</span>
        <p className="text-xs text-gray-600">{t.reminder2}</p>
      </div>
    </div>
  )
}

function MaintenancePreview({ t }) {
  return (
    <div className="w-full max-w-xs space-y-3 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-900">{t.issue1}</p>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
          {t.status1}
        </span>
      </div>
      <div className="flex h-20 w-full items-center justify-center rounded-lg bg-gray-100 text-lg">📷</div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-900">{t.issue2}</p>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
          {t.status2}
        </span>
      </div>
    </div>
  )
}

function InspectionPreview({ t }) {
  const items = [
    { label: t.item1, done: true },
    { label: t.item2, done: true },
    { label: t.item3, done: false },
  ]
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold text-gray-900">{t.checklist}</p>
      {items.map(({ label, done }) => (
        <div key={label} className="flex items-center gap-2">
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
              done ? 'bg-brand-600 text-white' : 'border-2 border-gray-300'
            }`}
          >
            {done && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="h-2 w-2">
                <path d="m5 12 5 5L19 7" />
              </svg>
            )}
          </span>
          <p className="text-xs text-gray-700">{label}</p>
        </div>
      ))}
    </div>
  )
}

function DevicesPreview() {
  return (
    <div className="flex w-full max-w-xs items-center justify-center gap-4 rounded-xl border border-gray-200 bg-white p-6">
      <span className="text-3xl">💻</span>
      <span className="text-2xl text-gray-300">+</span>
      <span className="text-3xl">📱</span>
    </div>
  )
}

function HousePreview({ t }) {
  const members = ['Evandro', 'Maria', 'João']
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold text-gray-900">{t.address}</p>
      {members.map((name) => (
        <div key={name} className="flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700">
            {name[0]}
          </span>
          <p className="text-xs text-gray-600">{name}</p>
        </div>
      ))}
    </div>
  )
}

const PREVIEW_COMPONENTS = {
  balance: BalancePreview,
  hallOfFame: HallOfFamePreview,
  shopping: ShoppingPreview,
  calendar: CalendarPreview,
  reminder: ReminderPreview,
  reports: ReportsPreview,
  house: HousePreview,
  maintenance: MaintenancePreview,
  inspection: InspectionPreview,
  devices: DevicesPreview,
}

export default function FeaturesSection() {
  const { dict } = useLocale()
  const t = dict.features

  return (
    <section id="recursos" className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h2>
        <p className="mt-3 text-gray-500">{t.subtitle}</p>
      </Reveal>

      <div className="mt-16 space-y-16 md:space-y-24">
        {t.items.map(({ icon, title, description, bullets, preview }, index) => {
          const fromRight = index % 2 === 1
          const Preview = PREVIEW_COMPONENTS[preview]
          return (
            <div
              key={title}
              className={`flex flex-col items-center gap-8 md:gap-16 ${
                fromRight ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <Reveal className="flex flex-1 justify-center" x={fromRight ? 40 : -40} y={0}>
                <Preview t={dict.previews[preview]} />
              </Reveal>
              <Reveal className="flex-1" x={fromRight ? -40 : 40} y={0} delay={0.1}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
                  {icon}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-gray-600">{description}</p>
                <ul className="mt-4 space-y-2">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-brand-600">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )
        })}
      </div>

      <Reveal className="mt-20 rounded-2xl border border-brand-100 bg-brand-50/60 p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900">{t.ctaBox.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{t.ctaBox.subtitle}</p>
        <a
          href={SIGNUP_URL}
          className="mt-5 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          {t.ctaBox.cta}
        </a>
      </Reveal>
    </section>
  )
}
