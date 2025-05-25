import Divider from "../../universal/Divider";
import ExperienceCard from "./ExperienceCard";

const EducationSection = () => (
  <section className="flex flex-col mb-8 gap-7">
    <Divider title="education" />
    <ExperienceCard
      date="Feb 2020 - June 2024"
      skills={[]}
      company="Queensland University of Technology"
      location="Brisbane, QLD"
      description="Bachelor's of Information Technology (Computer Science)"
    />
  </section>
);

export default EducationSection;
