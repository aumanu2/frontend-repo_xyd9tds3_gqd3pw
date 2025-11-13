import { useState } from 'react'
import { Menu, X, Palette, BadgeCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 grid place-items-center text-white shadow">
                <Palette size={18} />
              </div>
              <span className="font-semibold tracking-tight text-gray-900 dark:text-white">Design Collective</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-4 py-2 text-sm hover:bg-black/90 transition-colors">
                <BadgeCheck size={16} />
                Share a brief
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/70 dark:bg-white/10 border border-white/40">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 bg-white/70 dark:bg-white/10 border border-white/40 text-sm text-gray-800 dark:text-gray-200">
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
