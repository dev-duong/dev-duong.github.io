import TextBox from "../../../components/universal/TextBox";

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <article className="flex flex-col sm:flex-row gap-5 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl cursor-pointer">
        <div className="flex flex-col justify-between gap-3 flex-1">
          <div>
            <h3 className="text-xl font-semibold hover:text-myOrange transition">
              {title}
            </h3>
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
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
