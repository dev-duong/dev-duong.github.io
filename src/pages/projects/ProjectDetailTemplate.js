// Main Template for Projects

// UI Imports
import TechStackList from "../../components/ui/TechStack";
import FeaturesList from "../../components/ui/FeaturesList";
import FigmaPrototypes from "../../components/ui/FigmaPrototype";
import ProjectLinks from "../../components/ui/ProjectLinks";

// Layout Imports
import PageWrapper from "../../components/layout/PageWrapper";
import Divider from "../../components/layout/Divider";

const ProjectDetailTemplate = ({ project }) => {
  return (
    <PageWrapper>
      <article
        className="pr-4 custom-scrollbar"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <section>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          {/* Project */}
          <strong>Category:</strong> {project.category}
          <div className="flex items-center gap-4 my-6">
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
      <section>
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
