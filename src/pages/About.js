// Universal Imports
import SocialLinks from "../components/universal/layout/SocialLinks";

// Animations
import PageWrapper from "../components/universal/animations/PageWrapper";

// Page COmponents
import ProfileCard from "../components/pageSpecific/aboutPage/ProfileCard";
import ExperienceCardSection from "../components/pageSpecific/aboutPage/ExperienceCardSection";
import EducationCardSection from "../components/pageSpecific/aboutPage/EducationCardSection";
import SkillsSection from "../components/pageSpecific/aboutPage/SkillsSection";
import ToolsSection from "../components/pageSpecific/aboutPage/ToolsSection";
import CertificationsSection from "../components/pageSpecific/aboutPage/CertificationsSection";
import Button from "../components/universal/Button";
import CV from "../assets/cv/CV.pdf";

const About = () => {
  const skills = ["csharp", "css3", "python", "react", "html5", "tailwindcss"];
  const tools = ["git", "github", "vscode", "figma", "notion"];

  return (
    <PageWrapper>
      <main className="pt-28 px-4 w-full max-w-3xl mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
        {/* Body */}
        <article
          className="pr-4 custom-scrollbar"
          style={{ maxHeight: "68vh", overflowY: "auto" }}
        >
          <ProfileCard />
          <ExperienceCardSection />
          <EducationCardSection />
          <section className="flex flex-col md:flex-row justify-between gap-7">
            <SkillsSection skills={skills} />
            <ToolsSection tools={tools} />
          </section>
          <CertificationsSection />
        </article>
        {/* CV */}
        <section className="flex justify-center mt-7">
          <Button text="View CV" link={CV} />
        </section>

        {/* Footer */}
        <footer
          className="absolute md:fixed bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-4"
        >
          <SocialLinks />
        </footer>
      </main>
    </PageWrapper>
  );
};

export default About;
