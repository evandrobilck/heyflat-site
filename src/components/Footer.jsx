export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div className="flex items-center gap-2">
          <img src="/logo-purple.svg" alt="HeyFlat" className="h-6 w-auto" />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <a href="#recursos" className="hover:text-brand-600">
            Recursos
          </a>
          <a href="#planos" className="hover:text-brand-600">
            Planos
          </a>
          <a href="#faq" className="hover:text-brand-600">
            FAQ
          </a>
        </nav>

        <p className="text-xs text-gray-400">© {new Date().getFullYear()} HeyFlat. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
