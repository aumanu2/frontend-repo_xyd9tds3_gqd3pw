import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToggleSwitch from './components/ToggleSwitch'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [mode, setMode] = useState('team')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-white dark:from-[#0b0b10] dark:via-[#0b0b10] dark:to-[#0b0b10] text-gray-900 dark:text-white">
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <section className="pt-6">
          <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200">View mode</h2>
            <ToggleSwitch onChange={setMode} />
          </div>
        </section>

        <WorkGrid mode={mode} />
        <About />
        <Contact />
      </main>

      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Design Collective — All rights reserved.</p>
          <a href="/test" className="hover:underline">System Check</a>
        </div>
      </footer>
    </div>
  )
}

export default App
