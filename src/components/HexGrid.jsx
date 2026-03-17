import { useState } from 'react'
import { motion } from 'framer-motion'

const statusColors = {
  profitable: '#10B981',
  idle: '#F59E0B',
  maintenance: '#F43F5E',
}
const statusLabels = {
  profitable: 'Active',
  idle: 'Idle',
  maintenance: 'Maintenance',
}

const vehicles = Array.from({ length: 24 }, (_, i) => ({
  id: `V-${(9800 + i + 1).toString()}`,
  status: i % 7 === 0 ? 'maintenance' : i % 4 === 0 ? 'idle' : 'profitable',
}))

function HexagonSVG({ vehicle, index, onHover, onLeave }) {
  const points = '50,2 93,25 93,75 50,98 7,75 7,25'
  const color = statusColors[vehicle.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.025, ease: 'easeOut' }}
      className="relative cursor-pointer"
      onMouseEnter={() => onHover(vehicle)}
      onMouseLeave={onLeave}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon
          points={points}
          fill="transparent"
          stroke="#E5E5E5"
          strokeWidth="1.5"
          className="transition-all duration-300 hover:stroke-[#CCCCCC]"
        />
        <circle cx="50" cy="50" r="4" fill={color} opacity="0.85" />
      </svg>
    </motion.div>
  )
}

export default function HexGrid() {
  const [hovered, setHovered] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <h3 className="text-[11px] font-semibold tracking-[0.15em] text-text-tertiary uppercase mb-8">
        Fleet Live Network
      </h3>

      <div className="bg-white border border-gray-100 rounded-2xl p-8">
        <div className="grid grid-cols-8 gap-2">
          {vehicles.map((v, i) => (
            <HexagonSVG
              key={v.id}
              vehicle={v}
              index={i}
              onHover={setHovered}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-gray-100">
          {Object.entries(statusColors).map(([key, color]) => (
            <div key={key} className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-[11px] text-text-secondary capitalize">
                {key}
              </span>
            </div>
          ))}
        </div>
      </div>

      {hovered && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{ left: mousePos.x + 12, top: mousePos.y - 44 }}
        >
          <div className="bg-white border border-gray-100 shadow-lg px-5 py-3.5 rounded-xl space-y-1.5">
            <p className="text-xs text-text-secondary">
              Vehicle: <span className="text-text-primary font-semibold">{hovered.id}</span>
            </p>
            <p className="text-xs text-text-secondary">
              Status:{' '}
              <span style={{ color: statusColors[hovered.status] }} className="font-semibold">
                {statusLabels[hovered.status]}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
