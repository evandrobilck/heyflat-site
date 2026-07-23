import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

export default function RoommateOfMonthSection() {
  const { dict } = useLocale()
  const t = dict.roommateOfMonth

  return (
    <section id="morador-do-mes" className="border-y border-gray-100 bg-brand-50/40 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <Reveal>
          <span className="text-3xl">🏆</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-gray-600">{t.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
