import PhoneMockup from './PhoneMockup'

const LEFT_FEATURES = [
  {
    icon: '🧾',
    title: 'Contas divididas',
    text: 'Aluguel, energia, água, gás e internet — divididos igual, por porcentagem ou valor exato entre os moradores.',
  },
  {
    icon: '✅',
    title: 'Tarefas em rodízio',
    text: 'Organize quem faz o quê, com responsáveis, recorrência e um Hall da Fama pra quem mais colaborou no mês.',
  },
  {
    icon: '🛒',
    title: 'Lista de compras',
    text: 'Registre o que precisa comprar e transforme a compra direto numa conta dividida com a casa.',
  },
]

const RIGHT_FEATURES = [
  {
    icon: '📅',
    title: 'Calendário unificado',
    text: 'Contas e tarefas recorrentes, tudo num só calendário — nunca mais esqueça um vencimento.',
  },
  {
    icon: '📊',
    title: 'Relatórios de gastos',
    text: 'Veja quanto a casa gasta por categoria e mês, com comparativos pra economizar mais.',
  },
  {
    icon: '🌎',
    title: 'Multiplataforma',
    text: 'Web hoje, apps para iOS e Android a caminho — sempre a mesma conta, sincronizada em tempo real.',
  },
]

function FeatureItem({ icon, title, text, align = 'left' }) {
  return (
    <div className={`flex gap-3 ${align === 'right' ? 'md:flex-row-reverse md:text-right' : ''}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="mt-0.5 text-sm text-gray-500">{text}</p>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Nossos principais recursos
        </h2>
        <p className="mt-3 text-gray-500">Tudo que a sua casa compartilhada precisa, num só lugar.</p>
      </div>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="space-y-8">
          {LEFT_FEATURES.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>

        <div className="order-first md:order-none">
          <PhoneMockup />
        </div>

        <div className="space-y-8">
          {RIGHT_FEATURES.map((feature) => (
            <FeatureItem key={feature.title} {...feature} align="right" />
          ))}
        </div>
      </div>
    </section>
  )
}
