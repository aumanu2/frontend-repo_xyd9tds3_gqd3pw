import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ToggleSwitch({ onChange }) {
  const [mode, setMode] = useState('team')

  const toggle = () => {
    const next = mode === 'team' ? 'individual' : 'team'
    setMode(next)
    onChange?.(next)
  }

  return (
    <button onClick={toggle} className="relative inline-flex items-center rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 px-2 py-1">
      <motion.div
        layout
        className={`grid grid-cols-2 gap-1 rounded-xl p-1 text-xs font-medium`}
      >
        <motion.span
          layout
          className={`px-3 py-1 rounded-lg ${mode === 'team' ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-300'}`}
        >Team</motion.span>
        <motion.span
          layout
          className={`px-3 py-1 rounded-lg ${mode === 'individual' ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-300'}`}
        >Individual</motion.span>
      </motion.div>
    </button>
  )
}
