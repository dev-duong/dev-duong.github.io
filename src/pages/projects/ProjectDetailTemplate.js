import TextBox from "../../components/ui/TextBox";
import { getDefaultLabel } from "../../components/ui/LinkHelper";

const ProjectDetailTemplate = ({ project }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="mb-6">{project.description}</p>

      <div className="mb-6">
        <strong>Category:</strong> {project.category}
      </div>

      <div className="flex items-center gap-4 my-6">
        <strong className="whitespace-nowrap">Tags:</strong>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <TextBox
              key={tag}
              text={tag}
              bgColor="bg-myOrange"
              textColor="text-black"
            />
          ))}
        </div>
      </div>

      {project.link && (
        <div>
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
    </>
  );
};

export default ProjectDetailTemplate;
