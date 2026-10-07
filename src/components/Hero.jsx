import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import sanjeev from '../assets/sanjeev.webp';

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="accent-dot" /> Developer & designer</p>
        <h1>Sanjeev<br /><span>Magar.</span></h1>
        <p className="hero-intro">Thoughtful design.<br />Purposeful development.</p>
        <p className="body-copy">I build responsive web experiences that bring great ideas to life — from the first sketch to the final line of code.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
          <a className="button button-outline" href="/Cv%20-%20Sanjeev.pdf" download>Download CV <FiDownload aria-hidden="true" /></a>
        </div>
      </div>
      <div className="portrait-wrap">
        <span className="portrait-label">Design meets development</span>
        <img src={sanjeev} alt="Sanjeev Magar" className="portrait" fetchPriority="high" />
        <div className="portrait-caption"><span>SANJEEV MAGAR</span><span>Full stack developer <FiArrowUpRight aria-hidden="true" /></span></div>
      </div>
      <a className="scroll-cue" href="#projects">Scroll to explore <FiArrowDown aria-hidden="true" /></a>
    </section>
  );
}
