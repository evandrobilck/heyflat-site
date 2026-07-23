const LOGIN_URL = import.meta.env.VITE_APP_LOGIN_URL
const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

const NAV_LINKS = [
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#recursos', label: 'Recursos' },
  { href: '/#preco', label: 'Preço' },
  { href: '/#faq', label: 'Perguntas' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo-purple.svg" alt="HeyFlat" className="h-10 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-brand-600">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={LOGIN_URL}
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 md:px-4"
          >
            Login
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 md:px-4"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </header>
  )
}
