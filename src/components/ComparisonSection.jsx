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

function Cell({ value, partialLabel }) {
  if (value === true) return <span className="text-brand-600">✅</span>
  if (value === 'partial') return <span className="text-gray-500">{partialLabel}</span>
  return <span className="text-gray-300">❌</span>
}

export default function ComparisonSection() {
  const { dict } = useLocale()
  const t = dict.comparison

  return (
    <section id="diferencial" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 font-semibold text-gray-900">{t.columns.feature}</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-500">{t.columns.others}</th>
              <th className="border-l-2 border-brand-500 bg-brand-50 px-4 py-3 text-center font-semibold text-brand-700">
                {t.columns.heyflat}
              </th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((label, index) => {
              const [other, heyflat] = ROW_VALUES[index]
              return (
                <tr key={label} className={index % 2 === 1 ? 'bg-gray-50/60' : undefined}>
                  <td className="px-4 py-3 text-gray-700">{label}</td>
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
      </Reveal>
    </section>
  )
}
