import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Appoinment from './components/Appoinment';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Appoinment />
      </main>
      <Contact />
    </MotionConfig>
  );
}
