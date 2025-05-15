// UI
import SocialLinks from "../components/ui/SocialLinks";
import ProjectCard from "../components/ui/ProjectCard";

// Layout
import Divider from "../components/layout/Divider";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Project PDFs
import RealWorldJournal from "../assets/Projects/RealWorldJournal.pdf";
import MoreThanHuman from "../assets/Projects/MoreThanHuman.pdf";
import CarbonDrone from "../assets/Projects/CarbonDrone.pdf";
import CarbonDroneStatement from "../assets/Projects/CarbonDroneStatement.pdf";
import MushroomFont from "../assets/Projects/MushroomFont.pdf";
import MushroomFontStatement from "../assets/Projects/MushroomFontStatement.pdf";
import MushroomLog from "../assets/Projects/MushroomLog.otf";

// Project Page
const Projects = () => {
  return (
    <main className="pt-16 px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
      <PageWrapper>
        <section>
          <article className="flex flex-col gap-7 mb-10">
            <Divider title="Web Development" />
            <ProjectCard
              title="Portfolio Website V2"
              description="A modern, multi-page, and responsive portfolio website built with React and Tailwind CSS."
              tags={[
                "React",
                "Tailwind",
                "Framer Motion",
                "React Router",
                "GitHub Pages",
              ]}
              link="https://github.com/dev-duong/dev-duong.github.io"
            />
            <ProjectCard
              title="Portfolio Website V1"
              description="A Static portfolio website built using HTML and CSS [No longer Live]."
              tags={["HTML", "CSS", "GitHub Pages"]}
              link="https://github.com/dev-duong/v1-dev-duong.github.io"
            />
            <ProjectCard
              title="Web-Calculator"
              description="A web-based calculator built using HTML, CSS, and JavaScript, providing basic arithmetic functionality with a user-friendly interface."
              tags={["HTML", "CSS", "JavaScript"]}
              link="https://github.com/dev-duong/Web-Calculator"
            />
            <ProjectCard
              title="Portfolio Website [Mobile-Only]"
              description="A website portfolio built using HTML, and CSS. [Built for only mobile]"
              tags={["HTML", "CSS"]}
              link="https://github.com/dev-duong/Mobile-Website-Portfolio"
            />
            <ProjectCard
              title="Responsive Travel Website"
              description="A Static portfolio website built using HTML and CSS adhering to the requirements of Web Content Accessibility Guidelines (WCAG)"
              tags={["HTML", "CSS"]}
              link="https://github.com/dev-duong/Resposive-Travel-Website"
            />

            <Divider title="Games" />
            <ProjectCard
              title="FirstQuest"
              description="A C# Console text based game."
              tags={["C#"]}
              link="https://github.com/dev-duong/firstQuest"
            />
            <ProjectCard
              title="Catch Game"
              description="A simple basket catch game built in Unity."
              tags={["C#", "HLSL", "ShaderLab"]}
              link="https://github.com/dev-duong/CatchGame"
            />

            <Divider title="Utility" />
            <ProjectCard
              title="Saving Calculator"
              description="An interactive tool that helps users estimate how much they can split their income by percentage."
              tags={["C#"]}
              link="https://github.com/dev-duong/savingsCalculator"
            />

            <Divider title="UI/UX Design" />
            <ProjectCard
              title="Real World Journal"
              description="A logo Design for a fictional journal company called Real World Jounral."
              tags={["Adobe inDesign", "Adobe Illustrator"]}
              link={RealWorldJournal}
              type="pdf"
            />
            <ProjectCard
              title="More Than Human"
              description="A critical experience concept design. Includes contextual research, world building, and designs."
              tags={["Adobe inDesign", "Adobe Photoshop"]}
              link={MoreThanHuman}
              type="pdf"
            />
            <ProjectCard
              title="Carbon Drone"
              description="A critical experience and speculative concept design magazine and statement."
              tags={["Adobe inDesign", "Adobe Photoshop"]}
              link={[
                {
                  url: CarbonDrone,
                  type: "pdf",
                },
                {
                  url: CarbonDroneStatement,
                  type: "pdf",
                },
              ]}
              linkLabel={["Open Magazine PDF →", "Open Statement PDF →"]}
            />
            <ProjectCard
              title="Mushroom Font"
              description="A custom mushroom themed font."
              tags={["Adobe inDesign", "Adobe Illustrator"]}
              link={[
                {
                  url: MushroomFont,
                  type: "pdf",
                },
                {
                  url: MushroomFontStatement,
                  type: "pdf",
                },
                {
                  url: MushroomLog,
                },
              ]}
              linkLabel={[
                "Open Magazine PDF →",
                "Open Statement PDF →",
                "Download Font →",
              ]}
            />
          </article>
        </section>
      </PageWrapper>
      <footer
        className="absolute md:fixed bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-4"
      >
        <PageWrapper>
          <SocialLinks />
        </PageWrapper>
      </footer>
    </main>
  );
};

export default Projects;
