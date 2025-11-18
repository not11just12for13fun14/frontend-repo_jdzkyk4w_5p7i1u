import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Available for freelance projects
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I design playful, modern brand experiences
          </h1>
          <p className="mt-4 text-blue-100/90 max-w-xl">
            Portfolio of a creative graphic designer crafting bold visuals, vibrant motion, and interactive stories.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#portfolio" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition">View Work</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
