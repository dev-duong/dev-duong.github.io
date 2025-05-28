const getDefaultLabel = (type) => {
  return (
    {
      github: "View GitHub Repo →",
      pdf: "View PDF →",
      video: "Watch Video →",
    }[type] || "View Link →"
  );
};

const ProjectLinks = ({ link, linkLabel, type }) => {
  if (!link) return null;

  if (Array.isArray(link)) {
    return (
      <div className="my-6">
        {link.map((linkItem, i) => (
          <a
            key={i}
            href={linkItem.url || linkItem}
            target="_blank"
            rel="noopener noreferrer"
            className="text-myOrange mr-4 hover:underline hover:text-orange-500 transition"
          >
            {linkLabel?.[i] || getDefaultLabel(linkItem.type || type)}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="my-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-myOrange hover:underline hover:text-orange-500 transition"
      >
        {linkLabel || getDefaultLabel(type)}
      </a>
    </div>
  );
};

export default ProjectLinks;
