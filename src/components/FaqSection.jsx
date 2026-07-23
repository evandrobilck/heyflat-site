import Reveal from './Reveal'

const FAQ_ITEMS = [
  {
    question: 'O preço é por pessoa ou por casa?',
    answer:
      'Por casa, sempre. São AU$15 por mês pela casa inteira, independente de quantos moradores vocês são. Uma pessoa assina e todo mundo tem acesso completo.',
  },
  {
    question: 'Se entrar mais um morador, o preço sobe?',
    answer: 'Não. Moradores ilimitados, sempre AU$15 por casa.',
  },
  {
    question: 'O app processa os pagamentos entre a gente?',
    answer:
      'Não. O HeyFlat calcula, organiza e avisa quem deve o quê — o pagamento em si vocês fazem como já fazem hoje, por transferência entre vocês. Depois é só marcar como pago no app.',
  },
  {
    question: 'E se alguém sair da casa no meio do mês?',
    answer:
      'O HeyFlat mantém o histórico de moradores e faz o cálculo proporcional das contas do período em que a pessoa morou aí.',
  },
  {
    question: 'Funciona em português?',
    answer: 'Sim — português, inglês e espanhol. Cada morador escolhe o idioma dele, na mesma casa.',
  },
  {
    question: 'Preciso de cartão pra testar?',
    answer: 'Não. São 30 dias completos, com a casa toda, sem cadastrar cartão.',
  },
  {
    question: 'Serve pra qualquer tipo de casa?',
    answer:
      'Serve. Foi pensado pra share house, mas funciona igual pra república, casal dividindo despesas ou família organizando a rotina.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Perguntas frequentes
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {FAQ_ITEMS.map(({ question, answer }, index) => (
          <Reveal key={question} delay={Math.min(index * 0.06, 0.3)} y={16}>
            <details className="group rounded-xl border border-gray-200 bg-white p-5 open:border-brand-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-900">
                {question}
                <span className="shrink-0 text-lg leading-none text-brand-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-500">{answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
