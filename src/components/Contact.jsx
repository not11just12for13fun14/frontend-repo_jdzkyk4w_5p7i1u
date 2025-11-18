import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Contact
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e)=> e.preventDefault()}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-blue-100/90 mb-1">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/90 mb-1">Email</label>
              <input required type="email" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-100/90 mb-1">Message</label>
              <textarea required rows="5" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Tell me about your project..." />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
