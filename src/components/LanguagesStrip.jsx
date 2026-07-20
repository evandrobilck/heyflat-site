import Reveal from './Reveal'

const LANGUAGES = [
  { flag: '🇧🇷', label: 'Português' },
  { flag: '🇺🇸', label: 'English' },
  { flag: '🇪🇸', label: 'Español' },
]

export default function LanguagesStrip() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <Reveal>
          <p className="text-sm font-medium text-gray-500">
            Disponível em 3 idiomas, com mais chegando — pra qualquer casa, em qualquer país
          </p>
        </Reveal>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          {LANGUAGES.map(({ flag, label }, index) => (
            <Reveal key={label} delay={0.08 * index} y={12}>
              <span className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                <span className="text-lg leading-none">{flag}</span>
                {label}
              </span>
            </Reveal>
          ))}
          <Reveal delay={0.08 * LANGUAGES.length} y={12}>
            <span className="flex items-center gap-2 rounded-full border border-dashed border-brand-300 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              + mais em breve
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
