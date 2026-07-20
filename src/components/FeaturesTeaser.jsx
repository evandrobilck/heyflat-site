import { Link } from 'react-router-dom'
import PhoneMockup from './PhoneMockup'

const TEASER_ITEMS = [
  { icon: '🧾', title: 'Contas divididas', text: 'Igual, por porcentagem ou valor exato entre os moradores.' },
  { icon: '✅', title: 'Tarefas em rodízio', text: 'Responsáveis, recorrência e um Hall da Fama pra quem colabora mais.' },
  { icon: '🛒', title: 'Lista de compras', text: 'Registre compras e já transforme em conta dividida com a casa.' },
  { icon: '📅', title: 'Calendário unificado', text: 'Contas e tarefas recorrentes, tudo numa só visão.' },
  { icon: '📊', title: 'Gastos', text: 'Relatórios e gráficos de quanto a casa gasta por categoria e mês.' },
  { icon: '🏠', title: 'Dados da casa e moradores', text: 'Endereço, moradores, convites e o Cofre com Wi-Fi e dados de pagamento.' },
]

export default function FeaturesTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Um resumo do que a sua casa ganha
        </h2>
        <p className="mt-3 text-gray-500">Tudo que a sua casa compartilhada precisa, num só lugar.</p>
      </div>

      <div className="mt-12 grid items-start gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <PhoneMockup />
        </div>

        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {TEASER_ITEMS.map(({ icon, title, text }) => (
              <div key={title} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
                  {icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/recursos"
            className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Ver todos os recursos →
          </Link>
        </div>
      </div>
    </section>
  )
}
