import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="section-shell content-section">
      <div className="section-heading"><div><p className="eyebrow">01 / Selected projects</p><h2>Ideas into<br /><span className="muted">experiences.</span></h2></div><p className="section-note">A selection of web applications built with a focus on usability, detail, and thoughtful interaction.</p></div>
      <div className="project-grid">
        {PROJECTS.filter((project) => project.imgSrc).map((project, index) => {
          const hasLink = project.link && project.link !== '#';
          const content = <><div className="project-image"><img src={project.imgSrc} alt={`${project.title} application preview`} loading="lazy" /><span className="project-number">0{index + 1}</span>{hasLink && <span className="project-arrow"><FiArrowUpRight aria-hidden="true" /></span>}</div><div className="project-details"><div className="project-title"><h3>{project.title}</h3><span>{hasLink ? (project.link.includes('github.com') ? 'Source code' : 'Live project') : 'Preview only'}</span></div><p>{project.description}</p></div></>;
          return hasLink ? <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" aria-label={`${project.title} — ${project.link.includes('github.com') ? 'view source code' : 'view live project'} (opens in a new tab)`}>{content}</a> : <article key={project.id} className="project-card">{content}</article>;
        })}
      </div>
    </section>
  );
}
