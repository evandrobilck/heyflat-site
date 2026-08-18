import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

// Word count to break the headline after, tuned by hand per locale so the
// line wraps at a sensible clause boundary instead of wherever it happens to fit.
const BREAK_AFTER_WORD = { en: 4, pt: 5, es: 5 }

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

export default function FinalCtaSection() {
  const { dict, locale } = useLocale()
  const t = dict.finalCta

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
      <Reveal>
        <p className="text-sm font-medium text-brand-600">{t.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {withLineBreak(t.title, BREAK_AFTER_WORD[locale])}
        </h2>
        <p className="mt-4 text-lg text-zinc-600">{t.text}</p>
        <a
          href={SIGNUP_URL}
          className="mt-8 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          {t.cta}
        </a>
        <p className="mt-3 text-xs text-zinc-400">{t.finePrint}</p>
      </Reveal>
    </section>
  )
}
