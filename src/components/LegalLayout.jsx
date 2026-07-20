export default function LegalLayout({ title, updatedAt, children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-gray-400">Última atualização: {updatedAt}</p>

      <div className="prose-legal mt-10 space-y-8 text-gray-600">{children}</div>
    </div>
  )
}

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  )
}
