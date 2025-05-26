import { Link } from "react-router-dom";
import TextBox from "../../../components/universal/TextBox";

const ProjectCard = ({
  slug,
  title,
  description,
  techStack,
  link,
  type,
  linkLabel,
}) => {
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
            {techStack.map((tag, index) => (
              <TextBox
                key={index}
                text={tag}
                bgColor="bg-myOrange"
                textColor="text-black"
              />
            ))}
          </div>
          <span className="mt-3 inline-block text-myOrange font-medium text-sm hover:underline">
            View more &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
