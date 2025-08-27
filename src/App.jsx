import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/About'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import FunFacts from './components/FunFacts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollButtons from './components/ScrollButtons'

function App() {
  const [darkmode, setDarkmode] = useState(false)

  // Detectar preferencia del SO/navegador
  useEffect(() => {
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkmode(prefersDark)
  }, [])

  return (
    <div className={darkmode ? 'dark' : ''}>
      <div className='bg-slate-100 bg-gradient-to-b
          dark:from-[#0B1220] dark:via-[#0E1530] dark:to-[#161335]'>

        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <Hero />
        <AboutMe />
        <Experience />
        <Technologies />
        <FunFacts />
        <Contact />
        <Footer />
        <ScrollButtons />
      </div>
    </div>
  )
}

export default App
