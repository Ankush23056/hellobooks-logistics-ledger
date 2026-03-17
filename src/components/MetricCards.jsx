import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Truck, BarChart3 } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

const metrics = [
  {
    label: 'Monthly Cost-per-Mile',
    value: '$1.42',
    sub: '-2.4% from last month',
    trend: 'down',
    icon: DollarSign,
  },
  {
    label: 'Active Fleet Status',
    value: '98',
    valueSuffix: '/100',
    sub: 'Vehicles currently in transit',
    icon: Truck,
  },
  {
    label: 'Operating Margin',
    value: '14%',
    sub: 'Net profitability ratio',
    icon: BarChart3,
  },
]

export default function MetricCards() {
  return (
    <div className="space-y-8">
      <h3 className="text-[11px] font-semibold tracking-[0.15em] text-text-tertiary uppercase">
        Key Metrics
      </h3>

      <div className="space-y-6">
        {metrics.map((m, i) => {
          const Icon = m.icon
          return (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                  <Icon size={18} className="text-text-secondary" strokeWidth={1.5} />
                </div>
                <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-wide">
                  {m.label}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-light text-text-primary tracking-tight">
                  {m.value}
                </span>
                {m.valueSuffix && (
                  <span className="text-4xl font-light text-text-tertiary tracking-tight">
                    {m.valueSuffix}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {m.trend === 'down' && (
                  <TrendingDown size={13} className="text-emerald" />
                )}
                <p className="text-[12px] text-text-tertiary">{m.sub}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
