import Reveal from './Reveal'

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

function ReminderPreview() {
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold text-gray-900">Aluguel — vence dia 30</p>
      <div className="flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-2">
        <span className="text-sm">📧</span>
        <p className="text-xs text-gray-600">7 dias antes, às 09:00</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-2">
        <span className="text-sm">🔔</span>
        <p className="text-xs text-gray-600">1 dia antes, às 18:00</p>
      </div>
    </div>
  )
}

function MaintenancePreview() {
  return (
    <div className="w-full max-w-xs space-y-3 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-900">Vazamento na cozinha</p>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
          Em andamento
        </span>
      </div>
      <div className="flex h-20 w-full items-center justify-center rounded-lg bg-gray-100 text-lg">📷</div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-900">Torneira do banheiro</p>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
          Resolvido
        </span>
      </div>
    </div>
  )
}

function InspectionPreview() {
  const items = [
    { label: 'Paredes sem furos ou manchas', done: true },
    { label: 'Fogão e geladeira limpos', done: true },
    { label: 'Chaves e controle da garagem', done: false },
  ]
  return (
    <div className="w-full max-w-xs space-y-2 rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold text-gray-900">Checklist de saída</p>
      {items.map(({ label, done }) => (
        <div key={label} className="flex items-center gap-2">
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
              done ? 'bg-brand-600 text-white' : 'border-2 border-gray-300'
            }`}
          >
            {done && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="h-2 w-2">
                <path d="m5 12 5 5L19 7" />
              </svg>
            )}
          </span>
          <p className="text-xs text-gray-700">{label}</p>
        </div>
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
    icon: '💰',
    title: 'Contas',
    description:
      'Aluguel e contas divididos em segundos. Adicione qualquer conta — aluguel, luz, internet, mercado — e o HeyFlat divide automaticamente entre os moradores. Divisão igual, por porcentagem ou valor exato, você escolhe. E o lembrete de vencimento chega pra todo mundo pelo app, não por você.',
    bullets: [
      'Recorrência semanal, quinzenal, mensal ou anual',
      'Categorias personalizadas, além das já prontas',
      'Marque pagamentos como quitados, um por um',
    ],
    preview: BalancePreview,
  },
  {
    icon: '✅',
    title: 'Tarefas',
    description:
      'Uma escala que ninguém discute. Louça, lixo, banheiro, faxina. Monte a rotação da casa uma vez e pronto: cada um sabe a sua vez, o app avisa, e a discussão de "eu sempre faço tudo" acaba.',
    bullets: [
      'Marcar como feita por mais de uma pessoa',
      'Recorrência diária, semanal ou mensal',
      'Editar ou remover a qualquer momento',
    ],
    preview: HallOfFamePreview,
  },
  {
    icon: '🛒',
    title: 'Lista de Compras',
    description:
      'Uma lista só, sempre atualizada. Qualquer morador adiciona, todo mundo vê em tempo real. Quem for ao mercado já sai de casa sabendo o que falta.',
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
    icon: '🔔',
    title: 'Lembretes personalizados',
    description:
      'Nada mais passa batido. Configure lembretes pro que a sua casa precisa: vencimento de conta, dia do lixo, revisão do aquecedor. A casa toda é avisada na hora certa, automaticamente.',
    bullets: [
      'Vários lembretes por conta ou tarefa, cada um com seu canal',
      'Escolha o dia e o horário de cada aviso',
      'Lista de compras avisa a casa inteira em tempo real',
    ],
    preview: ReminderPreview,
  },
  {
    icon: '📊',
    title: 'Expenses',
    description:
      'Veja pra onde vai o dinheiro da casa. Gráficos claros de quanto a casa gasta por categoria e por mês. Dá pra enxergar onde apertar antes da conta chegar.',
    bullets: [
      'Filtro por período: mês atual, anterior ou últimos 3 meses',
      'Comparativo automático com o período anterior',
      'Exportação em CSV a qualquer momento',
    ],
    preview: ReportsPreview,
  },
  {
    icon: '🏠',
    title: 'House',
    description:
      'Tudo que a casa precisa num lugar só. Senha do Wi-Fi, dados da casa, calendário compartilhado e informações importantes sempre à mão. Chega de perguntar "qual mesmo a senha?" toda vez que chega visita.',
    bullets: [
      'Convide moradores com um código ou link de convite',
      'Cofre da casa: Wi-Fi e outras informações importantes',
      'Histórico de quem morou e por quanto tempo',
    ],
    preview: HousePreview,
  },
  {
    icon: '🔧',
    title: 'Manutenção',
    description:
      'Manutenção sob controle. Registre o que quebrou, o que já foi consertado e o que ainda está pendente. Todo mundo acompanha o status — sem aquele "achei que alguém já tinha ligado pro proprietário".',
    bullets: [
      'Fotos e descrição em cada problema registrado',
      'Acompanhamento de status até a resolução',
      'Histórico completo de tudo que já foi relatado',
    ],
    preview: MaintenancePreview,
  },
  {
    icon: '📋',
    title: 'Inspeções',
    description:
      'Inspeção sem correria. Marque a data da inspeção e organize o que precisa estar pronto antes dela. A casa se prepara junto, com antecedência, em vez de virar noite arrumando tudo na véspera.',
    bullets: [
      'Checklist configurável, item por item',
      'Use na entrada e na saída de moradores',
      'Registro que evita discussão sobre danos',
    ],
    preview: InspectionPreview,
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
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Nossos principais recursos
        </h2>
        <p className="mt-3 text-gray-500">Conheça, em detalhes, tudo que a sua casa compartilhada ganha.</p>
      </Reveal>

      <div className="mt-16 space-y-16 md:space-y-24">
        {FEATURES.map(({ icon, title, description, bullets, preview: Preview }, index) => {
          const fromRight = index % 2 === 1
          return (
            <div
              key={title}
              className={`flex flex-col items-center gap-8 md:gap-16 ${
                fromRight ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <Reveal className="flex flex-1 justify-center" x={fromRight ? 40 : -40} y={0}>
                <Preview />
              </Reveal>
              <Reveal className="flex-1" x={fromRight ? -40 : 40} y={0} delay={0.1}>
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
              </Reveal>
            </div>
          )
        })}
      </div>

      <Reveal className="mt-20 rounded-2xl border border-brand-100 bg-brand-50/60 p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900">Pronto pra organizar a sua casa?</h3>
        <p className="mt-2 text-sm text-gray-600">30 dias grátis, sem compromisso.</p>
        <a
          href={SIGNUP_URL}
          className="mt-5 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Criar conta grátis
        </a>
      </Reveal>
    </section>
  )
}
