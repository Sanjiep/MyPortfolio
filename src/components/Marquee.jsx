const skills = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'];
export default function Marquee() {
  return <div className="skills-strip" aria-label="Technologies I work with">{skills.map((skill) => <span key={skill}>{skill}<span aria-hidden="true">✳</span></span>)}</div>;
}
