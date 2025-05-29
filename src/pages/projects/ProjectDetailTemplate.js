// Main Template for Projects

// UI Imports
import TechStackList from "../../components/pageSpecific/projectPage/blog/TechStack";
import FeaturesList from "../../components/pageSpecific/projectPage/blog/FeaturesList";
import FigmaPrototypes from "../../components/pageSpecific/projectPage/blog/FigmaPrototype";
import ProjectLinks from "../../components/pageSpecific/projectPage/blog/ProjectLinks";

// Layout Imports
import PageWrapper from "../../components/universal/animations/PageWrapper";
import Divider from "../../components/universal/Divider";

const ProjectDetailTemplate = ({ project }) => {
  return (
    <PageWrapper>
      <article
        className="w-full max-w-4xl mx-auto pr-4 custom-scrollbar"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
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
          <Divider title="Summary" />
          <p className="text-justify">{project.summary}</p>
          {/* Motivation */}
          <Divider title="Motivation" />
          <p className="text-justify">{project.motivation}</p>
          {/* Features */}
          <Divider title="Features" />
          <FeaturesList features={project.features} />
        </section>
        <section>
          <Divider title="Figma Prototypes" />
          <FigmaPrototypes images={project.figures} />
        </section>
      </article>
      <section className="w-full max-w-4xl mx-auto">
        <ProjectLinks
          link={project.link}
          linkLabel={project.linkLabel}
          type={project.type}
        />
      </section>
    </PageWrapper>
  );
};

export default ProjectDetailTemplate;
