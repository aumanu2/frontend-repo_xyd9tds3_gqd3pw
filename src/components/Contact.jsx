import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we’ll get in touch soon!')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 p-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Share your brief</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Tell us about the problem, audience, and constraints. We’ll respond with a tailored approach.</p>

          <form onSubmit={submit} className="mt-6 grid gap-4">
            <input className="rounded-xl border border-black/10 bg-white/80 px-4 py-3" placeholder="Name" required />
            <input className="rounded-xl border border-black/10 bg-white/80 px-4 py-3" placeholder="Email" type="email" required />
            <textarea rows="5" className="rounded-xl border border-black/10 bg-white/80 px-4 py-3" placeholder="Project details" required />
            <button className="rounded-xl bg-gray-900 text-white px-5 py-3 text-sm hover:bg-black/90 transition-colors">Send</button>
          </form>

          {status && <p className="mt-4 text-green-700 dark:text-green-400">{status}</p>}
        </div>
      </div>
    </section>
  )
}
