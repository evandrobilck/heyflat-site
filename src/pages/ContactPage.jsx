const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center md:px-8 md:py-24">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Fale com a gente</h1>
      <p className="mt-3 text-gray-500">
        Dúvida, sugestão ou algum problema com a sua casa? Manda um e-mail — a gente responde rapidinho.
      </p>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
      >
        ✉️ {CONTACT_EMAIL}
      </a>

      <p className="mt-6 text-xs text-gray-400">Respondemos em até 2 dias úteis.</p>
    </div>
  )
}
