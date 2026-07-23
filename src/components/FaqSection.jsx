import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

export default function FaqSection() {
  const { dict } = useLocale()
  const t = dict.faq

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t.title}</h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {t.items.map(({ question, answer }, index) => (
          <Reveal key={question} delay={Math.min(index * 0.06, 0.3)} y={16}>
            <details className="group rounded-xl border border-gray-200 bg-white p-5 open:border-brand-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-900">
                {question}
                <span className="shrink-0 text-lg leading-none text-brand-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-500">{answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
