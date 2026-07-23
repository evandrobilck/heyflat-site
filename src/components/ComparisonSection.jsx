import Reveal from './Reveal'

const ROWS = [
  ['Divisão de contas', true, true],
  ['Divisão flexível (igual, %, exata)', 'partial', true],
  ['Tarefas e escala da casa', false, true],
  ['Lista de compras compartilhada', false, true],
  ['Lembretes personalizados', false, true],
  ['Controle de manutenção', false, true],
  ['Organização de inspeções', false, true],
  ['Calendário da casa', false, true],
  ['Cofre da casa (senhas e dados)', false, true],
  ['Relatórios de gastos', 'partial', true],
  ['Morador do Mês', false, true],
  ['Histórico de moradores', false, true],
  ['Português, English, Español', false, true],
  ['Preço por casa, não por pessoa', false, true],
]

function Cell({ value }) {
  if (value === true) return <span className="text-brand-600">✅</span>
  if (value === 'partial') return <span className="text-gray-500">Parcial</span>
  return <span className="text-gray-300">❌</span>
}

export default function ComparisonSection() {
  return (
    <section id="diferencial" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Outros apps dividem contas. O HeyFlat cuida da casa inteira.
        </h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 font-semibold text-gray-900">Recurso</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-500">Outros apps</th>
              <th className="border-l-2 border-brand-500 bg-brand-50 px-4 py-3 text-center font-semibold text-brand-700">
                HeyFlat
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, other, heyflat], index) => (
              <tr key={label} className={index % 2 === 1 ? 'bg-gray-50/60' : undefined}>
                <td className="px-4 py-3 text-gray-700">{label}</td>
                <td className="px-4 py-3 text-center">
                  <Cell value={other} />
                </td>
                <td className="border-l-2 border-brand-500 bg-brand-50/60 px-4 py-3 text-center">
                  <Cell value={heyflat} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  )
}
