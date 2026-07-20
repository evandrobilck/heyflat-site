const FAQ_ITEMS = [
  {
    question: 'O que é o HeyFlat?',
    answer:
      'É um app pra organizar a vida de casas compartilhadas: contas divididas, tarefas em rodízio, lista de compras e um calendário unificado de tudo isso, num só lugar.',
  },
  {
    question: 'Preciso pagar pra usar?',
    answer:
      'Só quem cria a casa assina o plano (com 30 dias grátis pra testar). Os demais moradores entram de graça com o código de convite da casa.',
  },
  {
    question: 'Como funciona a divisão de contas?',
    answer:
      'Você cadastra a conta, escolhe entre os moradores quem participa e como divide (igual, por porcentagem ou valor exato). O app calcula sozinho quem deve o quê pra quem.',
  },
  {
    question: 'Posso usar o HeyFlat no celular e no computador?',
    answer:
      'Sim — hoje o HeyFlat já funciona direto do navegador, no computador ou no celular, com a mesma conta. Apps nativos para iOS e Android estão a caminho.',
  },
  {
    question: 'O HeyFlat vende meus dados pra terceiros?',
    answer: 'Não. Seus dados são usados só pra fazer o app funcionar pra você e sua casa.',
  },
  {
    question: 'Posso cancelar a assinatura a qualquer momento?',
    answer: 'Sim, sem multa e sem burocracia — cancela quando quiser direto pelas configurações da casa.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        Perguntas frequentes
      </h2>

      <div className="mt-10 space-y-3">
        {FAQ_ITEMS.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-xl border border-gray-200 bg-white p-5 open:border-brand-200"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-900">
              {question}
              <span className="shrink-0 text-lg leading-none text-brand-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-gray-500">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
