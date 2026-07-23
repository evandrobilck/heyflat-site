const SIGNUP_URL = import.meta.env.VITE_APP_SIGNUP_URL

export default function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href={SIGNUP_URL}
        className="block w-full rounded-lg bg-brand-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
      >
        Começar grátis por 30 dias
      </a>
    </div>
  )
}
