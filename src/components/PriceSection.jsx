import Reveal from './Reveal'

const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

const PLAN = {
  name: 'HeyFlat Casa',
  price: 'AU$ 15',
  period: '/mês por casa',
  trialDays: 30,
  features: [
    'Moradores e contas ilimitados',
    'Contas, tarefas, compras e calendário compartilhados',
    'Relatórios de gastos da casa',
    'Suporte por e-mail',
    'Cancele quando quiser',
  ],
}

export default function PriceSection() {
  return (
    <section id="preco" className="bg-gradient-to-br from-brand-600 to-brand-800 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Preço</h2>
          <p className="mt-3 text-brand-100">Um plano só, simples, cobrado por casa — não por morador.</p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-sm rounded-2xl bg-white p-8 text-left shadow-xl">
          <p className="text-sm font-semibold text-brand-700">{PLAN.name}</p>
          <p className="mt-2">
            <span className="text-4xl font-extrabold text-gray-900">{PLAN.price}</span>
            <span className="text-sm text-gray-500">{PLAN.period}</span>
          </p>
          <p className="mt-1 text-sm font-medium text-green-600">
            {PLAN.trialDays} dias grátis pra testar
          </p>

          <ul className="mt-6 space-y-3">
            {PLAN.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-brand-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={SIGNUP_URL}
            className="mt-8 block rounded-lg bg-brand-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Começar teste grátis
          </a>
          <p className="mt-3 text-center text-xs text-gray-400">
            Só quem criou a casa é cobrado. Sem taxa de cartão pros demais moradores.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
