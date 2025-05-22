// This is a template component for displaying project details.

import TextBox from "../../components/ui/TextBox";
import { getDefaultLabel } from "../../components/ui/LinkHelper";
import PageWrapper from "../../components/layout/PageWrapper";
import Divider from "../../components/layout/Divider";

const ProjectDetailTemplate = ({ project }) => {
  return (
    <PageWrapper>
      <div
        className="pr-4 custom-scrollbar"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        <div className="mb-6">
          <strong>Category:</strong> {project.category}
        </div>

        <div className="flex items-center gap-4 my-6">
          <strong className="whitespace-nowrap self-start">Tech Stack:</strong>

          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((techStack) => (
              <TextBox
                key={techStack}
                text={techStack}
                bgColor="bg-myOrange"
                textColor="text-black"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Divider title="Summary" />
          <p className="text-justify">{project.summary}</p>
          <Divider title="Motivation" />
          <p className="text-justify">{project.motivation}</p>
          <Divider title="Features" />
          <ul className="list-disc list-inside space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        {/* Figma Design Screenshots */}
        {project.images?.length > 0 && (
          <div className="mt-8 flex flex-col gap-4">
            <Divider title="Figma Designs" />
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-xl shadow-md max-w-full h-auto"
              />
            ))}
          </div>
        )}
      </div>

      {project.link && ( // Link to github etc
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
