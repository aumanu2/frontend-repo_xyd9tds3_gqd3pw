import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-black/50 dark:via-black/30 dark:to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/10 px-3 py-1 text-xs text-gray-700 dark:text-gray-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-fuchsia-500 to-sky-500" />
            Interactive portfolio — team + individual
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Design that ships delight
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Explore how we ideate, prototype, and launch unified experiences. Switch between team-wide case studies and personal spotlights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-xl bg-gray-900 text-white px-5 py-3 text-sm hover:bg-black/90 transition-colors">View Work</a>
            <a href="#about" className="rounded-xl bg-white/70 backdrop-blur border border-black/10 px-5 py-3 text-sm text-gray-900 hover:bg-white/90 transition-colors">About Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
