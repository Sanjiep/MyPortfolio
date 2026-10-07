import { ABOUT } from '../constants';
const capabilities = [
  ['01', 'Interface design', 'Clear layouts and thoughtful interactions that make the web feel intuitive.'],
  ['02', 'Frontend development', 'Responsive experiences built with React, Next.js, and Tailwind CSS.'],
  ['03', 'Backend development', 'Application logic and data management with Node.js, Express, and MongoDB.'],
];
export default function About() {
  return (
    <section id="about" className="section-shell content-section about-section">
      <div><p className="eyebrow">02 / A little about me</p><h2>Curious mind.<br /><span className="muted">Creative approach.</span></h2><p className="about-copy">{ABOUT}</p></div>
      <div className="capabilities">{capabilities.map(([number, title, description]) => <div className="capability" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
    </section>
  );
}
