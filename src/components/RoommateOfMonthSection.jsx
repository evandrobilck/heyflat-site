import Reveal from './Reveal'

export default function RoommateOfMonthSection() {
  return (
    <section id="morador-do-mes" className="border-y border-gray-100 bg-brand-50/40 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <Reveal>
          <span className="text-3xl">🏆</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            A casa fica leve quando todo mundo colabora
          </h2>
          <p className="mt-4 text-gray-600">
            No fim de cada mês, quem mais ajudou a casa vira o Morador do Mês — com foto em destaque
            no app. É simples, é bobo, e funciona: a convivência melhora quando o esforço de cada um
            fica visível.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
