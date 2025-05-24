// Main Template for Projects

// UI Imports
import { getDefaultLabel } from "../../components/ui/LinkHelper";
import TechStackList from "../../components/ui/TechStack";
import FeaturesList from "../../components/ui/FeaturesList";
import FigmaPrototypes from "../../components/ui/FigmaPrototype";

// Layout Imports
import PageWrapper from "../../components/layout/PageWrapper";
import Divider from "../../components/layout/Divider";

const ProjectDetailTemplate = ({ project }) => {
  return (
    <PageWrapper>
      <div
        className="pr-4 custom-scrollbar"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        {/* ================================================================================ Project Information */}
        {/* Project Title */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        {/* Project */}
        <strong>Category:</strong> {project.category}
        {/* Tech Stack Section */}
        <div className="flex items-center gap-4 my-6">
          <strong className="whitespace-nowrap self-start">Tech Stack:</strong>
          <TechStackList techStack={project.techStack} />
        </div>
        {/* ================================================================================ Project Description Section */}
        <div className="flex flex-col gap-6 my-6">
          {/* Summary */}
          <Divider title="Summary" />
          <p className="text-justify">{project.summary}</p>
          {/* Motivation */}
          <Divider title="Motivation" />
          <p className="text-justify">{project.motivation}</p>
          {/* Features */}
          <Divider title="Features" />
          <FeaturesList features={project.features} />
        </div>
        {/* ================================================================================ Figma Prototypes Section */}
        <Divider title="Figma Prototypes" />
        <FigmaPrototypes images={project.figures} />
      </div>

      {/* ================================================================================ Project Links Section (GitHub, Demo, etc.) */}
      {project.link && (
        <div className="my-6">
          {Array.isArray(project.link) ? (
            project.link.map((linkItem, i) => (
              // Handles array of links
              <a
                key={i}
                href={linkItem.url || linkItem}
                target="_blank"
                rel="noopener noreferrer"
                className="text-myOrange mr-4"
              >
                {project.linkLabel?.[i] ||
                  getDefaultLabel(linkItem.type || project.type)}
              </a>
            ))
          ) : (
            // Handles individual link
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-myOrange"
            >
              {project.linkLabel || getDefaultLabel(project.type)}
            </a>
          )}
        </div>
      )}
    </PageWrapper>
  );
};

export default ProjectDetailTemplate;
