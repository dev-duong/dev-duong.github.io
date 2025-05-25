import TextBox from "../TextBox";

const TechStackList = ({ techStack }) => (
  <div className="flex flex-wrap gap-2">
    {techStack?.map((tech) => (
      <TextBox
        key={tech}
        text={tech}
        bgColor="bg-myOrange"
        textColor="text-black"
      />
    ))}
  </div>
);

export default TechStackList;
