import Divider from "../../universal/Divider";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => (
  <section className="flex flex-col mb-7 gap-7">
    <Divider title="experience" />
    <ExperienceCard
      date="Mar 2023 - Oct 2023"
      skills={["HTML", "REACT", "TAILWIND"]}
      company="TechnologyOne"
      location="Fortitude Valley, QLD"
      description="As a Lead UX/UI Designer and Consultant, I collaborated on front-end development using HTML, CSS, React.js, and Tailwind. I facilitated client discussions and promoted team collaboration to deliver both mobile and web applications."
    />
    <ExperienceCard
      date="Mar 2024 - Mar 2024"
      skills={[]}
      company="IKEA"
      location="North Lakes, QLD"
      description="Supported the installation and replacement of Cisco network switchboards, ensuring precise cable management and seamless team coordination."
    />
  </section>
);

export default ExperienceSection;
