import { Trophy, House } from '@phosphor-icons/react'
import { useLocale } from '../i18n/LocaleContext'

export default function PhoneMockup() {
  const { dict } = useLocale()
  const t = dict.mockup

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[280px] rounded-[2.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-2xl"
    >
      <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />
      <div className="h-[560px] overflow-hidden rounded-[2rem] bg-zinc-50">
        <div className="space-y-3 p-3">
          <div>
            <p className="text-sm font-semibold text-zinc-900">{t.greeting}</p>
            <p className="text-[11px] text-zinc-500">{t.location}</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <div className="bg-brand-600 px-3 py-4 text-center text-white">
              <p className="flex items-center justify-center gap-1 text-[10px] font-medium text-white/80">
                <Trophy weight="fill" className="h-3 w-3" />
                {t.roommateOfMonth}
              </p>
              <div className="mx-auto mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                EB
              </div>
              <p className="mt-1.5 text-xs font-semibold">Evandro Bilck</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5">
              <p className="text-[9px] font-medium text-amber-800">{t.youOwe}</p>
              <p className="text-sm font-semibold text-amber-700">AU$ 120</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
              <p className="text-[9px] font-medium text-emerald-800">{t.owedToYou}</p>
              <p className="text-sm font-semibold text-emerald-700">AU$ 45</p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-2.5">
            <p className="text-[10px] font-semibold text-zinc-900">{t.upcomingBills}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50">
                <House weight="fill" className="h-3.5 w-3.5 text-brand-600" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-zinc-900">{t.rent}</p>
                <p className="truncate text-[9px] text-zinc-500">{t.rentDue}</p>
              </div>
              <span className="text-[11px] font-semibold text-zinc-900">AU$ 280</span>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-2.5">
            <p className="text-[10px] font-semibold text-zinc-900">{t.upcomingTasks}</p>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <p className="truncate text-[11px] text-zinc-800">{t.takeOutTrash}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <p className="truncate text-[11px] text-zinc-800">{t.cleanBathroom}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
