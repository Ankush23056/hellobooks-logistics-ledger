import { motion } from 'framer-motion'
import MetricCards from './MetricCards'
import HexGrid from './HexGrid'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export default function DashboardView() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-10 lg:p-14 min-h-screen"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-xl font-semibold text-text-primary tracking-tight mb-1">
            Fleet Overview
          </h2>
          <p className="text-sm text-text-tertiary">
            Real-time status of your logistics network
          </p>
        </div>
        <div className="flex items-center gap-2.5 bg-emerald/8 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald pulse-dot" />
          <span className="text-xs font-medium text-emerald">
            All Systems Active
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <MetricCards />
        </div>
        <div>
          <HexGrid />
        </div>
      </div>
    </motion.div>
  )
}
