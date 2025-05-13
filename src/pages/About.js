// UI
import SocialLinks from "../components/ui/SocialLinks";
import TextBox from "../components/ui/TextBox";
import ExperienceCard from "../components/ui/ExperienceCard";

// Layout
import Divider from "../components/layout/Divider";

// Assets
import Profile from "../assets/profile.png";
import Icons from "../components/ui/Icons";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

const About = () => {
  const skills = ["csharp", "css3", "python", "react", "html5", "tailwindcss"];
  const tools = ["git", "github", "vscode", "figma", "notion"];

  return (
    <main className="pt-16 px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto min-h-screen flex flex-col justify-center flex-grow pb-20 md:pb-0">
      <PageWrapper>
        {/* Profile Section */}
        <section className="flex flex-col lg:flex-row justify-center items-center mb-5 gap-7 text-center lg:text-left bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-8 rounded-2xl">
          <img
            src={Profile}
            alt="Portrait of Dat at college graduation"
            className="w-40 h-40 rounded-full object-cover"
          />
          <article className="flex flex-col gap-7">
            <Divider title="profile" />
            <p className="text-gray-400">
              I'm a Computer Science graduate with a passion for UX/UI design
              and front-end development. I specialize in crafting intuitive,
              responsive web and mobile experiences using HTML, CSS, React.js,
              and Tailwind.
            </p>
          </article>
        </section>

        {/* Experience Section */}
        <section className="flex flex-col mb-7 gap-7">
          <Divider title="experience" />

          {/* TechOne Experience */}
          <ExperienceCard
            date="Mar 2023 - Oct 2023"
            skills={["HTML", "REACT", "TAILWIND"]}
            company="TechnologyOne"
            location="Fortitude Valley, QLD"
            description="As a Lead UX/UI Designer and Consultant, I collaborated on front-end development using HTML, CSS, React.js, and Tailwind. I facilitated client discussions and promoted team collaboration to deliver both mobile and web applications."
          />

          {/* IKEA Experience */}
          <ExperienceCard
            date="Mar 2024 - Mar 2024"
            skills={[]}
            company="IKEA"
            location="North Lakes, QLD"
            description="Supported the installation and replacement of Cisco network
                switchboards, ensuring precise cable management and seamless
                team coordination."
          />
        </section>

        {/* Education Section */}
        <section className="flex flex-col mb-8 gap-7">
          <Divider title="education" />
          <ExperienceCard
            date="Feb 2020 - Nov 2024"
            skills={[]}
            company="Queensland University of Technology"
            location="Brisbane, QLD"
            description="Bachelor's of Information Technology (Computer Science)"
          />
        </section>

        {/* Skills Section */}
        <section className="flex flex-col mb-8 gap-7">
          <Divider title="skills" />
          <article className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg flex justify-center">
              <Icons icons={skills} />
            </div>
          </article>
        </section>

        {/* Tools Section */}
        <section className="flex flex-col mb-8 gap-7">
          <Divider title="tools" />
          <article className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg flex justify-center">
              <Icons icons={tools} />
            </div>
          </article>
        </section>

        {/* Certifications Section */}
        <section className="flex flex-col mb-8 gap-7">
          <Divider title="other info" />
          <article className="flex flex-col sm:flex-row gap-7 bg-[#686868] bg-opacity-25 hover:bg-opacity-60 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl">
            <h3>CERTIFICATIONS</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <p>Australian Open "O" Class Driver's Licence</p>
              <p>Forklift License (LF)</p>
              <p>Responsible Service of Alcohol (RSA)</p>
            </div>
          </article>
        </section>
      </PageWrapper>

      {/* Footer */}
      <footer
        className="absolute md:fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-0"
      >
        <PageWrapper>
          <SocialLinks />
        </PageWrapper>
      </footer>
    </main>
  );
};

export default About;
