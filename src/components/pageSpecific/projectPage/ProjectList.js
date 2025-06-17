import ProjectCard from "./ProjectCard";

import { AnimatePresence, motion } from "framer-motion"; // keep if used

const ProjectList = ({ projects, selectedCategory }) => (
  <article
    className="flex flex-col gap-7 mb-10 pr-4 overflow-y-auto custom-scrollbar"
    style={{ maxHeight: "70vh" }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory || "all"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-7 mb-10 pr-4 overflow-y-auto custom-scrollbar"
        style={{ maxHeight: "70vh" }}
      >
        {projects.map((project) => (
          <a
            key={project.title} // or project.slug if you keep it
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline hover:no-underline"
          >
            <ProjectCard {...project} />
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  </article>
);

export default ProjectList;
