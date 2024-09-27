import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Appoinment from './components/Appoinment';
import { motion } from 'framer-motion';

const App = () => {

  return (
    <motion.main initial={{opacity:0}} 
    animate={{opacity:1}} 
    transition={{ease:[0.5, 1, 0.89, 1], duration:2}}
      className="font-light text-white antialiased selection:bg-lime-300 selection:text-black relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Appoinment />
      <Contact />
    </motion.main>
  );
};

export default App;
