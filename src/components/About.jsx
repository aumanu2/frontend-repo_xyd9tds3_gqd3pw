import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">How we build together</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            From kickoff to ship, we blend research, systems thinking, and visual craft. Our rhythm: align, explore, prototype, iterate, and deliver — with clear artifacts each step of the way.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-800 dark:text-gray-200">
            <li className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 p-4">Discovery & Goals</li>
            <li className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 p-4">Flows & Wireframes</li>
            <li className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 p-4">Design System</li>
            <li className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 p-4">Prototypes & Testing</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-tr from-fuchsia-200 via-violet-200 to-sky-200 dark:from-fuchsia-500/30 dark:via-violet-500/20 dark:to-sky-500/30" />
          <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-black/10 dark:border-white/10" />
        </motion.div>
      </div>
    </section>
  )
}
