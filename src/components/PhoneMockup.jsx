export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl">
      <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
      <div className="h-[560px] overflow-hidden rounded-[2rem] bg-gray-50">
        <div className="space-y-3 p-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">Olá, Evandro</p>
            <p className="text-[11px] text-gray-500">Você está em Pohlman Street</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-3 py-4 text-center text-white">
              <p className="text-[10px] font-medium text-white/80">🏆 Morador do mês</p>
              <div className="mx-auto mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                EB
              </div>
              <p className="mt-1.5 text-xs font-semibold">Evandro Bilck</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5">
              <p className="text-[9px] font-medium text-amber-800">Você deve</p>
              <p className="text-sm font-semibold text-amber-700">AU$ 120</p>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-2.5">
              <p className="text-[9px] font-medium text-green-800">Devem a você</p>
              <p className="text-sm font-semibold text-green-700">AU$ 45</p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-2.5">
            <p className="text-[10px] font-semibold text-gray-900">Próximas contas</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs">
                🏠
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-gray-900">Aluguel</p>
                <p className="text-[9px] text-gray-500">Vence 21 de jul.</p>
              </div>
              <span className="text-[11px] font-semibold text-gray-900">AU$ 280</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-2.5">
            <p className="text-[10px] font-semibold text-gray-900">Suas próximas tarefas</p>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <p className="truncate text-[11px] text-gray-800">Tirar o lixo</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <p className="truncate text-[11px] text-gray-800">Limpar banheiro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
