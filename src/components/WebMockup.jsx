const NAV_ITEMS = [
  { icon: '🏠', label: 'Início', active: true },
  { icon: '🧾', label: 'Contas' },
  { icon: '✅', label: 'Tarefas' },
  { icon: '🛒', label: 'Compras' },
  { icon: '🔧', label: 'Manutenção' },
]

export default function WebMockup() {
  return (
    <div className="w-full max-w-[560px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-gray-400 ring-1 ring-gray-200">
          app.heyflat.com.au
        </span>
      </div>

      <div className="flex">
        <div className="hidden w-36 shrink-0 space-y-1 border-r border-gray-100 bg-gray-50/60 p-3 sm:block">
          {NAV_ITEMS.map(({ icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium ${
                active ? 'bg-brand-50 text-brand-700' : 'text-gray-500'
              }`}
            >
              <span className="text-xs">{icon}</span>
              {label}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Pohlman Street</p>
              <p className="text-[10px] text-gray-500">4 moradores</p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700">
              EB
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5">
              <p className="text-[9px] font-medium text-amber-800">Você deve</p>
              <p className="text-sm font-semibold text-amber-700">AU$ 120</p>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-2.5">
              <p className="text-[9px] font-medium text-green-800">Devem a você</p>
              <p className="text-sm font-semibold text-green-700">AU$ 45</p>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-2.5 text-white">
              <p className="text-[9px] font-medium text-white/80">🏆 Mês</p>
              <p className="truncate text-[11px] font-semibold">Evandro</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-gray-200 bg-white p-2.5">
              <p className="text-[10px] font-semibold text-gray-900">Próximas contas</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px]">
                  🏠
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-medium text-gray-900">Aluguel</p>
                  <p className="text-[9px] text-gray-500">Vence 21 de jul.</p>
                </div>
                <span className="text-[10px] font-semibold text-gray-900">AU$ 280</span>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-2.5">
              <p className="text-[10px] font-semibold text-gray-900">Próximas tarefas</p>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <p className="truncate text-[10px] text-gray-800">Tirar o lixo</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <p className="truncate text-[10px] text-gray-800">Limpar banheiro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
