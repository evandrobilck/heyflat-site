import { Check, X } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const ROW_VALUES = [
  [true, true],
  ['partial', true],
  [false, true],
  [false, true],
  [false, true],
  [false, true],
  [false, true],
  [false, true],
  [false, true],
  ['partial', true],
  [false, true],
  [false, true],
  [false, true],
  [false, true],
]

// The title is always written as two short sentences; break the line between
// them instead of wherever the text happens to wrap.
function withSentenceBreak(title) {
  const [first, ...restSentences] = title.split('. ')
  const rest = restSentences.join('. ')
  if (!rest) return title
  return (
    <>
      {first}.<br />
      {rest}
    </>
  )
}

function Cell({ value, partialLabel }) {
  if (value === true) return <Check weight="bold" className="mx-auto h-4 w-4 text-brand-600" />
  if (value === 'partial') return <span className="text-xs font-medium text-zinc-500">{partialLabel}</span>
  return <X weight="bold" className="mx-auto h-4 w-4 text-zinc-300" />
}

export default function ComparisonSection() {
  const { dict } = useLocale()
  const t = dict.comparison

  return (
    <section id="diferencial" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{withSentenceBreak(t.title)}</h2>
      </Reveal>

      <Reveal delay={0.15} className="relative mt-12">
        <div className="overflow-x-auto rounded-2xl border border-zinc-200">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="px-4 py-3 font-semibold text-zinc-900">{t.columns.feature}</th>
              <th className="px-4 py-3 text-center font-semibold text-zinc-500">{t.columns.others}</th>
              <th className="border-l-2 border-brand-500 bg-brand-50 px-4 py-3 text-center font-semibold text-brand-700">
                {t.columns.heyflat}
              </th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((label, index) => {
              const [other, heyflat] = ROW_VALUES[index]
              return (
                <tr
                  key={label}
                  className={`transition-colors duration-200 hover:bg-brand-50/50 ${index % 2 === 1 ? 'bg-zinc-50/60' : ''}`}
                >
                  <td className="px-4 py-3 text-zinc-700">{label}</td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={other} partialLabel={t.partial} />
                  </td>
                  <td className="border-l-2 border-brand-500 bg-brand-50/60 px-4 py-3 text-center">
                    <Cell value={heyflat} partialLabel={t.partial} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-gradient-to-l from-white to-transparent sm:hidden" />
      </Reveal>
    </section>
  )
}
