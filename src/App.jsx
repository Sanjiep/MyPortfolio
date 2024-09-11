import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'

const App = () => {
  return (
      <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black'>
        <Navbar />
        <Hero />
      </main>
  )
}

export default App