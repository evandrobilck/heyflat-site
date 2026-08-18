import { House, Receipt, CheckSquare, ShoppingCart, Wrench, Trophy } from '@phosphor-icons/react'
import { useLocale } from '../i18n/LocaleContext'

export default function WebMockup() {
  const { dict } = useLocale()
  const t = dict.mockup

  const NAV_ITEMS = [
    { Icon: House, label: t.nav.home, active: true },
    { Icon: Receipt, label: t.nav.bills },
    { Icon: CheckSquare, label: t.nav.chores },
    { Icon: ShoppingCart, label: t.nav.shopping },
    { Icon: Wrench, label: t.nav.maintenance },
  ]

  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[560px] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl"
    >
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-zinc-600 ring-1 ring-zinc-200">
          app.heyflat.com.au
        </span>
      </div>

      <div className="flex">
        <div className="hidden w-36 shrink-0 space-y-1 border-r border-zinc-100 bg-zinc-50/60 p-3 sm:block">
          {NAV_ITEMS.map(({ Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium ${
                active ? 'bg-brand-50 text-brand-700' : 'text-zinc-500'
              }`}
            >
              <Icon weight={active ? 'fill' : 'regular'} className="h-3.5 w-3.5 shrink-0" />
              {label}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-900">{t.house}</p>
              <p className="text-[10px] text-zinc-500">{t.roommateCount}</p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700">
              EB
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5">
              <p className="text-[9px] font-medium text-amber-800">{t.youOwe}</p>
              <p className="text-sm font-semibold text-amber-700">AU$ 120</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
              <p className="text-[9px] font-medium text-emerald-800">{t.owedToYou}</p>
              <p className="text-sm font-semibold text-emerald-700">AU$ 45</p>
            </div>
            <div className="overflow-hidden rounded-xl bg-brand-600 p-2.5 text-white">
              <p className="flex items-center gap-1 text-[9px] font-medium text-white/80">
                <Trophy weight="fill" className="h-2.5 w-2.5" />
                {t.monthBadge}
              </p>
              <p className="truncate text-[11px] font-semibold">Evandro</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-2.5">
              <p className="text-[10px] font-semibold text-zinc-900">{t.upcomingBills}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50">
                  <House weight="fill" className="h-3 w-3 text-brand-600" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-medium text-zinc-900">{t.rent}</p>
                  <p className="truncate text-[9px] text-zinc-500">{t.rentDue}</p>
                </div>
                <span className="text-[10px] font-semibold text-zinc-900">AU$ 280</span>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-2.5">
              <p className="text-[10px] font-semibold text-zinc-900">{t.upcomingTasks}</p>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <p className="truncate text-[10px] text-zinc-800">{t.takeOutTrash}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <p className="truncate text-[10px] text-zinc-800">{t.cleanBathroom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
