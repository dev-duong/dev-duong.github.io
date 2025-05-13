// components/ExperienceCard.js

import TextBox from "../ui/TextBox"; // assuming TextBox is in the same folder

const ExperienceCard = ({ date, skills, company, location, description }) => {
  return (
    <article className="flex flex-col sm:flex-row gap-5 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl">
      <div className="flex flex-col gap-3 min-w-[175px]">
        <h3 className="text-gray-400">{date}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <TextBox
              key={index}
              text={skill}
              bgColor="bg-blue-400"
              textColor="text-black"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3>
          {company} | {location}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;
