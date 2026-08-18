import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

export default function ProblemSection() {
  const { dict } = useLocale()
  const t = dict.problem

  return (
    <section id="problema" className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{t.title}</h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
        {t.items.map(({ title, text }, index) => (
          <Reveal
            key={title}
            delay={Math.min(index * 0.08, 0.24)}
            className="bg-white p-7 transition-colors duration-300 hover:bg-brand-50/40"
          >
            <span className="text-xs font-semibold tabular-nums text-zinc-300">{String(index + 1).padStart(2, '0')}</span>
            <p className="mt-2 font-semibold text-zinc-900">{title}</p>
            <p className="mt-2 text-sm text-zinc-600">{text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <p className="text-2xl font-bold tracking-tight text-brand-700 md:text-3xl">{t.closing}</p>
      </Reveal>
    </section>
  )
}
