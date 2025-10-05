import Divider from "../../universal/Divider";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => (
  <section className="flex flex-col mb-7 gap-7">
    <Divider title="experience" />
    <ExperienceCard
      date="July 2025 - Present"
      skills={["HTML", "REACT", "WORDPRESS", "PHP", "SEO"]}
      company="Jade Finance"
      location="Varsity Lakes, Gold Coast, QLD"
      description="As a Web Developer, I build and maintain responsive websites and custom tools using WordPress, PHP, JavaScript, and React. I focus on performance, accessibility, and SEO optimization while integrating analytics and automation tools to enhance business efficiency and user experience."
    />
    <ExperienceCard
      date="Mar 2023 - Oct 2023"
      skills={["HTML", "REACT", "TAILWIND", ""]}
      company="TechnologyOne"
      location="Fortitude Valley, Brisbane, QLD"
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
