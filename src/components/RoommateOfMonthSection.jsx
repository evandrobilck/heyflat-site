import { Trophy } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

// Word count to break the headline after, tuned by hand per locale so the
// line wraps at a sensible clause boundary instead of wherever it happens to fit.
const BREAK_AFTER_WORD = { en: 5, pt: 5, es: 7 }

function withLineBreak(title, breakAfter) {
  const words = title.split(' ')
  if (!breakAfter || breakAfter >= words.length) return title
  return (
    <>
      {words.slice(0, breakAfter).join(' ')}
      <br />
      {words.slice(breakAfter).join(' ')}
    </>
  )
}

export default function RoommateOfMonthSection() {
  const { dict, locale } = useLocale()
  const t = dict.roommateOfMonth

  return (
    <section id="morador-do-mes" className="border-y border-zinc-100 bg-brand-50/40 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <Reveal>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/20">
            <Trophy weight="fill" className="h-7 w-7 text-white" />
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            {withLineBreak(t.title, BREAK_AFTER_WORD[locale])}
          </h2>
          <p className="mt-4 text-zinc-600">{t.text.replace(/\s+—\s+/g, ', ')}</p>
        </Reveal>
      </div>
    </section>
  )
}
