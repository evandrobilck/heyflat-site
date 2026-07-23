import Reveal from './Reveal'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
      <Reveal>
        <p className="text-sm font-medium text-brand-600">
          Criado por quem também já dividiu casa fora do Brasil
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Sua casa se organiza sozinha a partir de hoje
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Junte-se às casas que trocaram a planilha e o grupo do WhatsApp por um app só.
        </p>
        <a
          href={SIGNUP_URL}
          className="mt-8 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Começar grátis por 30 dias
        </a>
        <p className="mt-3 text-xs text-gray-400">Sem cartão · Depois do teste, AU$15/mês por casa</p>
      </Reveal>
    </section>
  )
}
