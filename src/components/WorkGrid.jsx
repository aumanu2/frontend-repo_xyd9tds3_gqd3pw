import { useMemo } from 'react'
import { motion } from 'framer-motion'

const sampleTeam = [
  {
    id: 't1',
    title: 'Unified Dashboard',
    role: 'Team effort — UX, UI, Systems',
    tags: ['web', 'analytics', 'design system'],
    img: 'https://images.unsplash.com/photo-1551281044-8af0a7fa6f87?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't2',
    title: 'Mobile Banking Redesign',
    role: 'Team effort — research, flows, HIG',
    tags: ['mobile', 'finance', 'accessibility'],
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't3',
    title: 'AI Helpdesk',
    role: 'Team effort — conversational UI',
    tags: ['ai', 'chat', 'product'],
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
]

const sampleInd = [
  {
    id: 'i1',
    title: 'Micro‑interactions Pack',
    role: 'Individual — motion + prototyping',
    tags: ['motion', 'figma', 'framer'],
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'i2',
    title: 'Accessibility Audit',
    role: 'Individual — WCAG improvements',
    tags: ['a11y', 'audit', 'contrast'],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'i3',
    title: 'Iconography Set',
    role: 'Individual — vector + branding',
    tags: ['icons', 'branding', 'svg'],
    img: 'https://images.unsplash.com/photo-1603575449299-0ca136b44bd1?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function WorkGrid({ mode = 'team' }) {
  const data = useMemo(() => (mode === 'team' ? sampleTeam : sampleInd), [mode])

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Selected {mode === 'team' ? 'Team' : 'Individual'} Work</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">A snapshot of outcomes across research, visual design, and front-end polish.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, idx) => (
            <motion.a
              key={item.id}
              href={`#case-${item.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10 backdrop-blur hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.role}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-black/10 dark:border-white/20 px-2 py-1 text-gray-700 dark:text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
