import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

const fields = [
  { name: 'date', type: 'date', placeholder: '' },
  { name: 'vendor', type: 'text', placeholder: 'e.g. shell logistics' },
  { name: 'amount', type: 'number', placeholder: '0.00' },
  { name: 'vehicle_id', type: 'text', placeholder: 'v-9821' },
  { name: 'route_code', type: 'text', placeholder: 'rt-north-01' },
]

export default function ExpenseForm() {
  const [form, setForm] = useState({
    date: '',
    vendor: '',
    amount: '',
    vehicle_id: '',
    route_code: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="min-h-screen flex items-start justify-center p-10 lg:p-14"
    >
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-text-primary tracking-tight mb-1">
            Log Expense
          </h2>
          <p className="text-sm text-text-tertiary">
            Record a new fleet transaction
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-7">
            {fields.map((field) => (
              <div key={field.name} className="space-y-2.5">
                <label className="text-[11px] font-semibold tracking-[0.1em] text-text-tertiary block uppercase">
                  {field.name.replace('_', ' ')}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="input-underline w-full py-3 text-sm"
                  step={field.type === 'number' ? '0.01' : undefined}
                />
              </div>
            ))}

            <div className="pt-4">
              <button
                type="submit"
                className={`w-full py-4 text-[12px] font-semibold tracking-[0.15em] uppercase rounded-xl transition-all duration-300 cursor-pointer ${
                  submitted
                    ? 'bg-emerald text-white'
                    : 'bg-text-primary text-white hover:opacity-90'
                }`}
              >
                {submitted ? '✓ LOGGED SUCCESSFULLY' : 'LOG EXPENSE'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
