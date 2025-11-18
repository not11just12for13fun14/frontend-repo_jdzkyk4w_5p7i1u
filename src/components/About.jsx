import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_100%_0%,rgba(147,197,253,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:p-10"
        >
          <p className="text-blue-100/90 leading-relaxed">
            I’m a creative graphic designer focused on building vibrant brand worlds. My work blends bold color, clean grids, and playful motion to make ideas feel alive. Over the past years I’ve collaborated with startups and studios worldwide on brand identity, campaigns, and digital experiences.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Figma wizard", "Motion-friendly", "Detail-obsessed"].map((chip) => (
              <span key={chip} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100/90">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
