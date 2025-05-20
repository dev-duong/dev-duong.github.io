import { Link } from "react-router-dom";
import TextBox from "../ui/TextBox";

const ProjectCard = ({
  slug,
  title,
  description,
  tags,
  link,
  type,
  linkLabel,
}) => {
  // Helper to get link label per type
  const getDefaultLabel = (type) => {
    return (
      {
        github: "View GitHub Repo →",
        pdf: "View PDF →",
        video: "Watch Video →",
      }[type] || "View Link →"
    );
  };

  // Normalize links into an array of objects with url and optional type
  const links = Array.isArray(link)
    ? link.map((item) =>
        typeof item === "string" ? { url: item, type } : item
      )
    : link
    ? [{ url: link, type }]
    : [];

  // Normalize linkLabel to array for easier mapping
  const labels = (() => {
    if (!linkLabel) return links.map(({ type }) => getDefaultLabel(type));
    if (typeof linkLabel === "string") return links.map(() => linkLabel);
    if (Array.isArray(linkLabel)) {
      return links.map(
        (_, i) => linkLabel[i] || getDefaultLabel(links[i].type)
      );
    }
    return links.map(({ type }) => getDefaultLabel(type));
  })();

  return (
    <Link to={`/projects/${slug}`} className="block">
      <article className="flex flex-col sm:flex-row gap-5 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl cursor-pointer">
        <div className="flex flex-col justify-between gap-3 flex-1">
          <div>
            <Link to={`/projects/${slug}`}>
              <h3 className="text-xl font-semibold hover:text-myOrange transition">
                {title}
              </h3>
            </Link>
            <p className="text-gray-400">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <TextBox
                key={index}
                text={tag}
                bgColor="bg-myOrange"
                textColor="text-black"
              />
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-1">
            {links.map(({ url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-myOrange hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {labels[index]}
              </a>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
