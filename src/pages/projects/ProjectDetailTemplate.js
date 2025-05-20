const ProjectDetailTemplate = ({ project }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="mb-6">{project.description}</p>

      <div className="mb-6">
        <strong>Category:</strong> {project.category}
      </div>

      <div className="mb-6">
        <strong>Tags:</strong>{" "}
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 text-gray-700 px-2 py-1 mr-2 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <div>
          {Array.isArray(project.link) ? (
            project.link.map((linkItem, i) => (
              <a
                key={i}
                href={linkItem.url || linkItem}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mr-4"
              >
                {project.linkLabel?.[i] || "View Link"}
              </a>
            ))
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Project
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDetailTemplate;
