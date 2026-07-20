import Reveal from './Reveal'

const PLACEHOLDER_PARTNERS = ['Studio Nine', 'Casa Viva', 'Morada+', 'Rede Aluga', 'Junto', 'ViveBem']

export default function PartnersBar() {
  return (
    <section className="border-y border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <p className="shrink-0 text-sm font-medium text-brand-700">
            Em breve, parcerias com quem entende de moradia compartilhada:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-60 grayscale">
            {PLACEHOLDER_PARTNERS.map((name) => (
              <span key={name} className="text-lg font-bold tracking-tight text-gray-400">
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
