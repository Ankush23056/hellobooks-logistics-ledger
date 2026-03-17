import { LayoutDashboard, Truck, DollarSign, BrainCircuit, Settings, ChevronRight } from 'lucide-react'

const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'expenses', icon: DollarSign, label: 'Transactions' },
  { id: 'vehicles', icon: Truck, label: 'Vehicles' },
  { id: 'ai-query', icon: BrainCircuit, label: 'AI Query' },
]

export default function Sidebar({ activeView, onNavigate }) {
  return (
    <aside className="w-64 h-screen bg-white flex flex-col shrink-0 border-r border-gray-100">
      {/* Logo */}
      <div className="px-7 pt-8 pb-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald/10 flex items-center justify-center">
            <Truck size={18} className="text-emerald" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-text-primary tracking-tight">
              Logix
            </h1>
            <p className="text-[10px] text-text-tertiary tracking-wide">
              Fleet Operations
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <p className="text-[9px] font-semibold tracking-[0.2em] text-text-tertiary uppercase px-3 mb-3">
          Menu
        </p>
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-[13px] transition-all duration-200 cursor-pointer group ${
                  isActive
                    ? 'bg-emerald/8 text-emerald font-medium shadow-sm'
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2 : 1.5}
                  className={isActive ? 'text-emerald' : 'text-text-tertiary group-hover:text-text-secondary'}
                />
                <span className="flex-1 text-left">{item.label}</span>
                {isActive && <ChevronRight size={14} className="text-emerald/50" />}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-6">
        <div className="border-t border-gray-100 pt-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-[13px] text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors cursor-pointer"
          >
            <Settings size={18} strokeWidth={1.5} className="text-text-tertiary" />
            <span>Settings</span>
          </button>
        </div>

        {/* User card */}
        <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center text-[11px] text-emerald font-semibold">
            JD
          </div>
          <div>
            <p className="text-[12px] font-medium text-text-primary">John Doe</p>
            <p className="text-[10px] text-text-tertiary">Fleet Manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
