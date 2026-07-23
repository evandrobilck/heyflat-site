import Reveal from './Reveal'

const PROBLEMS = [
  {
    title: 'A planilha que ninguém abre.',
    text: 'Você monta, atualiza, e sempre falta alguém lançar o que gastou.',
  },
  {
    title: 'A cobrança no grupo.',
    text: '"Gente, o aluguel vence amanhã 🙏" — visualizado por cinco, respondido por nenhum.',
  },
  {
    title: 'A escala de tarefas invisível.',
    text: 'Sempre parece que é você que faz tudo. E provavelmente é.',
  },
  {
    title: 'As decisões perdidas.',
    text: 'O aviso do encanador sumiu entre mil mensagens no WhatsApp.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problema" className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Dividir casa não deveria ser tão complicado
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROBLEMS.map(({ title, text }, index) => (
          <Reveal key={title} delay={Math.min(index * 0.08, 0.24)} className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="mt-2 text-sm text-gray-600">{text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-14 text-center">
        <p className="text-2xl font-extrabold tracking-tight text-brand-700 md:text-3xl">
          O HeyFlat resolve os quatro.
        </p>
      </Reveal>
    </section>
  )
}
