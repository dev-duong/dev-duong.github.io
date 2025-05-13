import TextBox from "../ui/TextBox"; // assuming same TextBox component

const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <article className="flex flex-col sm:flex-row gap-5 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl">
      <div className="w-full sm:w-48 h-40 sm:h-auto overflow-hidden rounded-xl">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col justify-between gap-3 flex-1">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
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

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-myOrange mt-2 hover:underline"
          >
            View GitHub Repo →
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
