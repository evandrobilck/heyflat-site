import PhoneMockup from './PhoneMockup'
import Reveal from './Reveal'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-6xl px-4 pb-8 pt-12 md:px-8 md:pb-16 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8">
        <Reveal>
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Feito pra quem mora dividido
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Sua casa compartilhada, <span className="text-brand-600">organizada</span>.
            </h1>
            <p className="mt-4 max-w-md text-lg text-gray-600">
              Contas, tarefas, compras e calendário da república ou apartamento dividido — tudo num
              só lugar, dividido de forma justa entre os moradores.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SIGNUP_URL}
                className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Criar conta grátis
              </a>
              <a
                href="#recursos"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400"
              >
                Ver recursos
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-400">30 dias grátis · cancele quando quiser</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  )
}
