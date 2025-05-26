import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

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
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="block no-underline hover:no-underline"
          >
            <ProjectCard {...project} />
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  </article>
);

export default ProjectList;
