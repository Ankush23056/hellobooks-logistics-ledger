import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, ArrowUp } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

const recentQueries = [
  'fuel efficiency_Q4',
  'route profitability_Dec23',
  'driver_performance_summary',
  'delivery_delay_heatmap',
  'maintenance_cycle_predict',
  'warehouse_utilization_v2',
]

export default function AIQueryInterface() {
  const [query, setQuery] = useState('')

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="min-h-screen flex flex-col"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-10 py-6 border-b border-gray-100">
        <div className="flex items-center gap-8">
          <h2 className="text-lg font-semibold text-text-primary tracking-tight">
            AI Assistant
          </h2>
          <div className="flex items-center gap-2.5 bg-emerald/8 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald pulse-dot" />
            <span className="text-[11px] font-medium text-emerald">
              Online
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xs text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
            Export CSV
          </button>
          <button className="text-xs text-text-secondary hover:text-text-primary border border-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
            Settings
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Recent Queries */}
        <div className="w-64 border-r border-gray-100 bg-white p-6 shrink-0">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-text-tertiary uppercase mb-5">
            Recent Queries
          </p>
          <div className="space-y-1">
            {recentQueries.map((q, i) => (
              <button
                key={i}
                className={`w-full text-left px-4 py-3 text-[13px] rounded-xl transition-colors cursor-pointer ${
                  i === 4
                    ? 'bg-emerald/8 text-emerald font-medium'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-10 space-y-8">
            {/* User Query */}
            <div className="flex justify-end">
              <div className="bg-text-primary text-white rounded-2xl rounded-br-sm px-6 py-4 max-w-md">
                <p className="text-[13px] leading-relaxed">
                  Which vehicle had the highest maintenance cost this month?
                </p>
              </div>
            </div>

            {/* AI Response */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald/10 flex items-center justify-center">
                  <BrainCircuit size={16} className="text-emerald" />
                </div>
                <p className="text-sm font-semibold text-text-primary">
                  Analysis Result
                </p>
              </div>

              <p className="text-[13px] text-text-secondary leading-relaxed ml-11">
                Based on the maintenance logs for Dec 1 – Dec 28, the following
                vehicle recorded the highest expenditure:
              </p>

              {/* Result Table */}
              <div className="ml-11 border border-gray-100 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 px-6 py-3.5 border-b border-gray-100 bg-gray-50/50">
                  <span className="text-[11px] tracking-wide text-text-secondary font-semibold uppercase">
                    Vehicle ID
                  </span>
                  <span className="text-[11px] tracking-wide text-text-secondary font-semibold text-right uppercase">
                    Maintenance Total (₹)
                  </span>
                </div>
                <div className="grid grid-cols-2 px-6 py-4">
                  <span className="text-sm text-text-primary font-medium">
                    MH-12-BQ-8842
                  </span>
                  <span className="text-sm text-text-primary text-right font-medium">
                    1,42,500.00
                  </span>
                </div>
              </div>

              <p className="text-[12px] text-text-tertiary italic ml-11">
                Primary cost driver: Engine overhaul and hydraulic pump replacement.
              </p>
            </div>
          </div>

          {/* Input Bar */}
          <div className="border-t border-gray-100 p-6">
            <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm focus-within:border-gray-300 focus-within:shadow-md transition-all">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about your fleet performance..."
                className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-tertiary"
              />
              <button className="w-9 h-9 rounded-xl bg-text-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shrink-0">
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald/10 flex items-center justify-center text-[10px] text-emerald font-bold">
                JD
              </div>
              <span className="text-xs text-text-secondary">
                Logistics Manager
              </span>
            </div>
            <p className="text-[10px] text-text-tertiary">
              Powered by{' '}
              <span className="text-emerald font-medium">
                Logistics Intelligence v2.4
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
