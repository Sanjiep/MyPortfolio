import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Appoinment from './components/Appoinment';

const App = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null); // Keep track of the scroll instance

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Initialize LocomotiveScroll if screen width >= 768px
    if (screenWidth >= 768) {
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        getDirection: true,
      });
    }

    // Clean up LocomotiveScroll instance when the component unmounts
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <main
      ref={containerRef}
      data-scroll-container
      className="font-light text-white antialiased selection:bg-lime-300 selection:text-black relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Appoinment />
      <Contact />
    </main>
  );
};

export default App;
