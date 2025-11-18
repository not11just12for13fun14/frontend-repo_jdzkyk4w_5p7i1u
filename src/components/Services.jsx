import { motion } from 'framer-motion'
import { Sparkles, Palette, Wand2, Film } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, style guides, and bold visual systems that stand out.'
  },
  {
    icon: Sparkles,
    title: 'Art Direction',
    desc: 'Creative concepts, campaign look & feel, and storytelling.'
  },
  {
    icon: Film,
    title: 'Motion & Video',
    desc: 'Animated assets, edits, and lively motion design for socials.'
  },
  {
    icon: Wand2,
    title: 'Web & UI',
    desc: 'Playful websites with subtle 3D, micro-interactions, and flow.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Services
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 text-slate-900 shadow-lg shadow-cyan-400/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-blue-100/90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
