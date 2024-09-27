import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="projects" className="max-w-5xl mx-auto my-10 px-8">
      <h2 className="text-center text-3xl lg:text-8xl">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 py-6">
      {PROJECTS[0] && (
      <div
        key={PROJECTS[0].link}
        className="relative group  block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === 0 && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <a href={PROJECTS[0].link} target="_blank" rel="noreferrer">
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-10 cursor-pointer">
            <div className="relative z-50">
              <div className="p-4">
                <img
                  src={PROJECTS[0].imgSrc}
                  alt={PROJECTS[0].title}
                  className="h-auto w-full object-cover rounded-lg"
                />
                <h4 className="text-zinc-100 font-bold lg:text-xl tracking-wide mt-4">
                  {PROJECTS[0].title}
                </h4>
                <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {PROJECTS[0].description}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    )}

    {PROJECTS.slice(1).map((project, idx) => (
      <div
        key={project?.link}
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(idx + 1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === idx + 1 && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <a href={project.link} target="_blank" rel="noreferrer">
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-10 cursor-pointer">
            <div className="relative z-50">
              <div className="p-4">
              {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        alt={project?.title}
                        className="h-auto w-full object-cover rounded-lg"
                        autoPlay loop muted
                      />
                    ) : (
                      <img
                        src={project?.imgSrc}
                        alt={project?.title}
                        className="h-auto w-full object-cover rounded-lg"
                      />
                    )}
                <h4 className="text-zinc-100 font-bold lg:text-xl tracking-wide mt-4">
                  {project.title}
                </h4>
                <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>
  );
};

export default Projects;
