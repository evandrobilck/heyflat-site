import { useLocale, localeHome } from '../i18n/LocaleContext'

const SOCIAL_LINKS = [
  { href: '#', label: 'X (Twitter)', icon: 'x' },
  { href: '#', label: 'Instagram', icon: 'instagram' },
  { href: '#', label: 'LinkedIn', icon: 'linkedin' },
  { href: '#', label: 'TikTok', icon: 'tiktok' },
  { href: '#', label: 'Facebook', icon: 'facebook' },
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
  if (icon === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16.5 3c.4 1.9 1.6 3.2 3.5 3.4v2.7c-1.3 0-2.5-.4-3.5-1.1v6.6c0 3-2.4 5.4-5.4 5.4S5.7 17.6 5.7 14.6c0-2.8 2.1-5.1 4.8-5.4v2.8c-1.2.3-2 1.3-2 2.6 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7V3h2.6Z" />
      </svg>
    )
  }
  if (icon === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M15 8.5h2V5.3c-.5-.1-1.4-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4v2H8.5v3H10.8v7h3v-7h2.3l.4-3H13.8v-1.7c0-.9.3-1.3 1.2-1.3Z" />
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
  const { locale, dict, href } = useLocale()
  const t = dict.footer

  const productLinks = [
    { href: href('recursos'), label: t.productLinks[0] },
    { href: href('preco'), label: t.productLinks[1] },
    { href: href('faq'), label: t.productLinks[2] },
    { href: href('contato'), label: t.productLinks[3] },
  ]
  const legalLinks = [
    { href: '/privacidade', label: t.legalLinks[0] },
    { href: '/termos', label: t.legalLinks[1] },
    { href: '/privacidade#cookies', label: t.legalLinks[2] },
    { href: '/privacidade#seguranca', label: t.legalLinks[3] },
  ]
  const connectLinks = [
    { href: href('contato'), label: t.connectLinks[0] },
    { href: '#', label: t.connectLinks[1] },
    { href: localeHome(locale), label: t.connectLinks[2] },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center">
          <div>
            <img src="/logo-white.svg" alt="HeyFlat" className="h-7 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-gray-400">{t.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <StoreBadge icon="🍎" sublabel={t.storeBadges.comingSoon} label={t.storeBadges.appStore} />
            <StoreBadge icon="▶" sublabel={t.storeBadges.comingSoon} label={t.storeBadges.googlePlay} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-12 sm:grid-cols-4">
          <FooterColumn title={t.columns.product} links={productLinks} />
          <div>
            <p className="text-sm font-semibold text-white">{t.columns.follow}</p>
            <div className="mt-4 flex gap-2">
              {SOCIAL_LINKS.map(({ href: socialHref, label, icon }) => (
                <a
                  key={label}
                  href={socialHref}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title={t.columns.legal} links={legalLinks} />
          <FooterColumn title={t.columns.connect} links={connectLinks} />
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          {t.copyright.replace('{year}', new Date().getFullYear())}
        </p>
      </div>
    </footer>
  )
}
