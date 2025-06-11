// Main Template for Projects

// UI Imports
import TechStackList from "../../components/pageSpecific/projectPage/blog/TechStack";
import FeaturesList from "../../components/pageSpecific/projectPage/blog/FeaturesList";
import FigmaPrototypes from "../../components/pageSpecific/projectPage/blog/FigmaPrototype";
import ProjectLinks from "../../components/pageSpecific/projectPage/blog/ProjectLinks";

// Layout Imports
import PageWrapper from "../../components/universal/animations/PageWrapper";
import Divider from "../../components/universal/Divider";

// React Router Imports
import { Link } from "react-router-dom";

const ProjectDetailTemplate = ({ project }) => {
  return (
    <PageWrapper>
      <div className="mb-4">
        <Link
          to="/projects"
          className="inline-block text-myOrange font-medium text-m hover:text-orange-500 hover:underline transition"
        >
          ← Back to Projects
        </Link>
      </div>
      <article
        className="w-full max-w-4xl mx-auto pr-4 custom-scrollbar"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        {/* Back to Projects Button */}

        <section className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          {/* Project */}
          <div className="flex gap-2">
            <strong>Category:</strong>
            {project.category}
          </div>
          <div className="flex gap-2">
            <strong>Year:</strong>
            {project.year}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 my-6">
            <strong className="whitespace-nowrap self-start">
              Tech Stack:
            </strong>
            <TechStackList techStack={project.techStack} />
          </div>
        </section>

        <section className="flex flex-col gap-6 my-6">
          {/* Summary */}
          {project.summary && (
            <>
              <Divider title="Summary" />
              <p className="text-justify">{project.summary}</p>
            </>
          )}

          {/* Motivation */}
          {project.motivation && (
            <>
              <Divider title="Motivation" />
              <p className="text-justify">{project.motivation}</p>
            </>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <>
              <Divider title="Features" />
              <FeaturesList features={project.features} />
            </>
          )}
        </section>
        {project.figures && project.figures.length > 0 && (
          <section>
            <Divider title="Figma Prototypes" />
            <FigmaPrototypes images={project.figures} />
          </section>
        )}

        {project.link && (
          <section className="flex justify-center">
            <ProjectLinks
              link={project.link}
              linkLabel={project.linkLabel}
              type={project.type}
            />
          </section>
        )}
      </article>
    </PageWrapper>
  );
};

export default ProjectDetailTemplate;
