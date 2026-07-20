const PRODUCT_LINKS = [
  { href: '#recursos', label: 'Vantagens' },
  { href: '#preco', label: 'Preços' },
  { href: '#recursos', label: 'Como funciona' },
  { href: '#faq', label: 'FAQ' },
  { href: '#', label: 'Blog' },
]

const LEGAL_LINKS = [
  { href: '#', label: 'Privacidade' },
  { href: '#', label: 'Termos' },
  { href: '#', label: 'Cookies' },
  { href: '#', label: 'Segurança' },
]

const CONNECT_LINKS = [
  { href: '#contato', label: 'Contato' },
  { href: '#', label: 'Changelog' },
  { href: '#topo', label: 'Sobre' },
]

const SOCIAL_LINKS = [
  { href: '#', label: 'X (Twitter)', icon: 'x' },
  { href: '#', label: 'Instagram', icon: 'instagram' },
  { href: '#', label: 'LinkedIn', icon: 'linkedin' },
]

function SocialIcon({ icon }) {
  if (icon === 'x') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22H16l-5.2-6.8L4.9 22H1.8l8.1-9.3L1 2h7.5l4.7 6.2L18.9 2Zm-1.3 18h1.7L6.5 3.9H4.7l12.9 16.1Z" />
      </svg>
    )
  }
  if (icon === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.8 8.65 22 11.5 22 14.3V21h-4v-6c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V21h-4V9Z" />
    </svg>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className="text-sm text-gray-400 hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StoreBadge({ label, sublabel, icon }) {
  return (
    <span className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 opacity-70">
      <span className="text-lg leading-none">{icon}</span>
      <span className="text-left leading-tight">
        <span className="block text-[9px] text-gray-400">{sublabel}</span>
        <span className="block text-xs font-semibold text-white">{label}</span>
      </span>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center">
          <div>
            <img src="/logo-white.svg" alt="HeyFlat" className="h-7 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-gray-400">
              Sua casa compartilhada, organizada. Contas, tarefas, compras e calendário num só lugar.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <StoreBadge icon="🍎" sublabel="Em breve na" label="App Store" />
            <StoreBadge icon="▶" sublabel="Em breve no" label="Google Play" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-12 sm:grid-cols-4">
          <FooterColumn title="Produto" links={PRODUCT_LINKS} />
          <div>
            <p className="text-sm font-semibold text-white">Siga-nos</p>
            <div className="mt-4 flex gap-2">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
          <FooterColumn title="Conectar" links={CONNECT_LINKS} />
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} HeyFlat. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
