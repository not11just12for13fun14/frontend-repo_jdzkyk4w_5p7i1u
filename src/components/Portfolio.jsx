import { motion } from 'framer-motion'

const works = [
  { title: 'Neon Lines', tag: 'Branding', color: 'from-fuchsia-500 to-cyan-400' },
  { title: 'Play Grid', tag: 'Motion', color: 'from-yellow-400 to-rose-500' },
  { title: 'Waveform', tag: 'UI/UX', color: 'from-cyan-400 to-blue-500' },
  { title: 'Liquid Type', tag: 'Typography', color: 'from-emerald-400 to-teal-500' },
  { title: 'Pixel Party', tag: 'Art Direction', color: 'from-rose-500 to-purple-500' },
  { title: 'Monochrome', tag: 'Editorial', color: 'from-slate-300 to-slate-500' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Portfolio
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className={`h-48 w-full bg-gradient-to-tr ${w.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-blue-100/90">{w.tag}</span>
                <h3 className="text-lg font-semibold text-white">{w.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
