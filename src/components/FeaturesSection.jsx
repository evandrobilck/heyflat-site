const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

function BalancePreview() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-3">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
        <p className="text-[10px] font-medium text-amber-800">Você deve</p>
        <p className="text-lg font-semibold text-amber-700">AU$ 120</p>
      </div>
      <div className="rounded-xl border border-green-200 bg-green-50 p-3">
        <p className="text-[10px] font-medium text-green-800">Devem a você</p>
        <p className="text-lg font-semibold text-green-700">AU$ 45</p>
      </div>
    </div>
  )
}

function HallOfFamePreview() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-5 text-center text-white">
        <p className="text-xs font-medium text-white/80">🏆 Morador do mês</p>
        <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-base font-semibold">
          EB
        </div>
        <p className="mt-2 text-sm font-semibold">Evandro Bilck</p>
        <p className="text-xs text-white/80">8 tarefas feitas</p>
      </div>
    </div>
  )
}

function ShoppingPreview() {
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 shrink-0 rounded-full border-2 border-gray-300" />
        <p className="text-xs text-gray-700">Papel higiênico</p>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="h-2 w-2">
            <path d="m5 12 5 5L19 7" />
          </svg>
        </span>
        <p className="text-xs text-gray-400 line-through">Detergente</p>
        <span className="ml-auto text-xs font-medium text-gray-500">AU$ 8</span>
      </div>
    </div>
  )
}

function CalendarPreview() {
  const days = Array.from({ length: 21 }, (_, i) => i + 1)
  const billDays = [7, 14, 21]
  const taskDays = [5, 12, 20]
  return (
    <div className="w-full max-w-xs rounded-xl border border-gray-200 bg-white p-4">
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day) => (
          <div key={day} className="flex flex-col items-center gap-0.5 py-1 text-[10px] text-gray-600">
            <span>{day}</span>
            <span className="flex h-1 gap-0.5">
              {billDays.includes(day) && <span className="h-1 w-1 rounded-full bg-brand-500" />}
              {taskDays.includes(day) && <span className="h-1 w-1 rounded-full bg-blue-500" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsPreview() {
  const bars = [40, 70, 55, 90, 65]
  return (
    <div className="flex w-full max-w-xs items-end gap-2 rounded-xl border border-gray-200 bg-white p-4">
      {bars.map((height, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-brand-400" style={{ height: `${height}px` }} />
      ))}
    </div>
  )
}

function DevicesPreview() {
  return (
    <div className="flex w-full max-w-xs items-center justify-center gap-4 rounded-xl border border-gray-200 bg-white p-6">
      <span className="text-3xl">💻</span>
      <span className="text-2xl text-gray-300">+</span>
      <span className="text-3xl">📱</span>
    </div>
  )
}

function HousePreview() {
  const members = ['Evandro', 'Maria', 'João']
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold text-gray-900">Pohlman Street</p>
      {members.map((name) => (
        <div key={name} className="flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700">
            {name[0]}
          </span>
          <p className="text-xs text-gray-600">{name}</p>
        </div>
      ))}
    </div>
  )
}

const FEATURES = [
  {
    icon: '🧾',
    title: 'Contas divididas',
    description:
      'Cadastre qualquer conta da casa — aluguel, energia, água, gás, internet, mercado — e divida do jeito que fizer mais sentido pra vocês: igual entre todos, por porcentagem ou valor exato pra cada pessoa. O HeyFlat calcula sozinho o saldo de quem deve o quê pra quem, sem planilha nem grupo de WhatsApp cheio de "quem pagou o quê".',
    bullets: [
      'Recorrência semanal, quinzenal, mensal ou anual',
      'Categorias personalizadas, além das já prontas',
      'Marque pagamentos como quitados, um por um',
    ],
    preview: BalancePreview,
  },
  {
    icon: '✅',
    title: 'Tarefas em rodízio',
    description:
      'Cadastre as tarefas da casa, escolha um ou mais responsáveis (ou deixe geral, pra qualquer um assumir) e defina a recorrência. Quem mais colaborar no mês vira o "Morador do Mês" no Hall da Fama — um jeito leve de manter todo mundo fazendo a sua parte, sem parecer cobrança.',
    bullets: [
      'Marcar como feita por mais de uma pessoa',
      'Recorrência diária, semanal ou mensal',
      'Editar ou remover a qualquer momento',
    ],
    preview: HallOfFamePreview,
  },
  {
    icon: '🛒',
    title: 'Lista de compras',
    description:
      'Adicione o que está faltando em casa, e quando alguém for ao mercado, registre a compra com categoria, quem comprou e como o valor é dividido. A compra já vira automaticamente uma conta dividida — sem precisar cadastrar tudo de novo em outro lugar.',
    bullets: [
      'Histórico de tudo que já foi comprado',
      'Edição de itens e compras registradas',
      'Reaproveita as mesmas categorias das contas',
    ],
    preview: ShoppingPreview,
  },
  {
    icon: '📅',
    title: 'Calendário unificado',
    description:
      'Veja, num só calendário, todas as contas e tarefas recorrentes da casa — inclusive as próximas ocorrências, não só a primeira data. Clique em qualquer dia pra ver exatamente o que vence ou o que precisa ser feito.',
    bullets: [
      'Contas e tarefas recorrentes aparecem em todas as datas futuras',
      'Cores diferentes pra contas (roxo) e tarefas (azul)',
      'Um clique leva direto pros detalhes do dia',
    ],
    preview: CalendarPreview,
  },
  {
    icon: '📊',
    title: 'Relatórios de gastos',
    description:
      'Acompanhe quanto a casa gastou por categoria e por mês, compare com o período anterior e exporte tudo em CSV quando precisar prestar contas ou organizar o orçamento da casa.',
    bullets: [
      'Filtro por período: mês atual, anterior ou últimos 3 meses',
      'Comparativo automático com o período anterior',
      'Exportação em CSV a qualquer momento',
    ],
    preview: ReportsPreview,
  },
  {
    icon: '🏠',
    title: 'Dados da casa e moradores',
    description:
      'Cadastre o nome, endereço e foto da casa, veja quem mora com você e desde quando, e convide novos moradores com um código ou link. Guarde ainda informações importantes no Cofre da casa — Wi-Fi, PayID e dados bancários — acessíveis só pra quem mora lá.',
    bullets: [
      'Convide moradores com um código ou link de convite',
      'Cofre da casa: Wi-Fi, PayID e outras informações',
      'Histórico de quem morou e por quanto tempo',
    ],
    preview: HousePreview,
  },
  {
    icon: '🌎',
    title: 'Multiplataforma',
    description:
      'Hoje o HeyFlat já funciona direto do navegador, no computador ou no celular, com a mesma conta sincronizada em tempo real entre todos os moradores. Apps nativos para iOS e Android estão a caminho, usando a mesma conta que você já tem.',
    bullets: [
      'Mesma conta em qualquer dispositivo',
      'Atualizações em tempo real entre moradores',
      'App mobile nativo a caminho',
    ],
    preview: DevicesPreview,
  },
]

export default function FeaturesSection() {
  return (
    <section id="recursos" className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Nossos principais recursos
        </h2>
        <p className="mt-3 text-gray-500">Conheça, em detalhes, tudo que a sua casa compartilhada ganha.</p>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {FEATURES.map(({ icon, title, description, bullets, preview: Preview }, index) => (
          <div
            key={title}
            className={`flex flex-col items-center gap-8 md:gap-16 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className="flex flex-1 justify-center">
              <Preview />
            </div>
            <div className="flex-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
                {icon}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{title}</h3>
              <p className="mt-3 text-gray-600">{description}</p>
              <ul className="mt-4 space-y-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-brand-600">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-brand-100 bg-brand-50/60 p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900">Pronto pra organizar a sua casa?</h3>
        <p className="mt-2 text-sm text-gray-600">30 dias grátis, sem compromisso.</p>
        <a
          href={SIGNUP_URL}
          className="mt-5 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Criar conta grátis
        </a>
      </div>
    </section>
  )
}
