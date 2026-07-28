import { useState } from 'react'
import Reveal from './Reveal'
import { useLocale } from '../i18n/LocaleContext'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL

export default function ContactSection() {
  const { dict } = useLocale()
  const t = dict.contact
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="bg-gradient-to-br from-brand-600 to-brand-800 py-16 md:py-24">
      <div className="mx-auto max-w-xl px-4 text-center md:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-brand-100">{t.subtitle}</p>
        </Reveal>

        <Reveal
          as="form"
          delay={0.15}
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 rounded-2xl bg-white p-8 text-left shadow-xl">
          <div>
            <label htmlFor="contact-name" className="text-xs font-medium text-gray-600">
              {t.labels.name}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-xs font-medium text-gray-600">
              {t.labels.email}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-xs font-medium text-gray-600">
              {t.labels.message}
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60"
          >
            {status === 'sending' ? t.sending : t.submit}
          </button>

          {status === 'success' && (
            <p className="text-center text-xs font-medium text-green-600">{t.success}</p>
          )}
          {status === 'error' && (
            <p className="text-center text-xs font-medium text-red-600">{t.error.replace('{email}', CONTACT_EMAIL)}</p>
          )}
          {status !== 'success' && status !== 'error' && (
            <p className="text-center text-xs text-gray-400">{t.note.replace('{email}', CONTACT_EMAIL)}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
