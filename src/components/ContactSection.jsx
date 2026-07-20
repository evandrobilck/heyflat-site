import { useState } from 'react'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Fale com a gente — ${name || 'Site HeyFlat'}`)
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contato" className="bg-gradient-to-br from-brand-600 to-brand-800 py-16 md:py-24">
      <div className="mx-auto max-w-xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Fale com a gente</h2>
        <p className="mt-3 text-brand-100">
          Dúvida, sugestão ou algum problema com a sua casa? Manda uma mensagem — a gente responde rapidinho.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl bg-white p-8 text-left shadow-xl">
          <div>
            <label className="text-xs font-medium text-gray-600">Nome</label>
            <input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600">Mensagem</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Enviar mensagem
          </button>
          <p className="text-center text-xs text-gray-400">
            Isso abre seu app de e-mail com a mensagem pronta pra {CONTACT_EMAIL}.
          </p>
        </form>
      </div>
    </section>
  )
}
