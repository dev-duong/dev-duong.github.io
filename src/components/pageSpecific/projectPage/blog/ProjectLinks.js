const getDefaultLabel = (type) => {
  return (
    {
      github: "View GitHub Repo",
      pdf: "View PDF",
      video: "Watch Video",
    }[type] || "View Link"
  );
};

const ProjectLinks = ({ link, linkLabel, type }) => {
  if (!link) return null;

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const buttonClasses =
    "bg-myOrange text-black font-medium px-4 py-2 mr-4 rounded-lg shadow hover:bg-orange-500 transition";

  if (Array.isArray(link)) {
    return (
      <div className="my-6 flex flex-wrap gap-2">
        {link.map((linkItem, i) => {
          const url = linkItem.url || linkItem;
          const label =
            linkLabel?.[i] || getDefaultLabel(linkItem.type || type);

          return (
            <button
              key={i}
              onClick={() => handleClick(url)}
              className={buttonClasses}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="my-6">
      <button onClick={() => handleClick(link)} className={buttonClasses}>
        {linkLabel || getDefaultLabel(type)}
      </button>
    </div>
  );
};

export default ProjectLinks;
