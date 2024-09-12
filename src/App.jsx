import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import About from './components/About'

const App = () => {
  return (
      <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black'>
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <About />
      </main>
  )
}

export default App