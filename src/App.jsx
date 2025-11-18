import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 py-10 text-center text-blue-100/70">
        © {new Date().getFullYear()} Creative Studio — All rights reserved.
      </footer>
    </div>
  )
}

export default App
