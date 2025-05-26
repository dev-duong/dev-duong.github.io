import { useState } from "react";

// UI
import SocialLinks from "../components/universal/layout/SocialLinks";
import CategoryFilter from "../components/pageSpecific/projectPage/CategoryFilter";

// Page Components
import ProjectList from "../components/pageSpecific/projectPage/ProjectList";

// Animations
import PageWrapper from "../components/universal/animations/PageWrapper";

// Pages
import projectsData from "./data/ProjectData";

// All Projects
//const allProjects = [
// // Portfolio V1
// {
//   category: "Web Development",
//   title: "Portfolio Website V1",
//   description:
//     "A Static portfolio website built using HTML and CSS [No longer Live].",
//   techStack: ["HTML", "CSS", "GitHub Pages"],
//   link: "https://github.com/dev-duong/v1-dev-duong.github.io",
//   type: "github",
// },
// // Web Calculator
// {
//   category: "Web Development",
//   title: "Web-Calculator",
//   description:
//     "A web-based calculator built using HTML, CSS, and JavaScript, providing basic arithmetic functionality with a user-friendly interface.",
//   techStack: ["HTML", "CSS", "JavaScript"],
//   link: "https://github.com/dev-duong/Web-Calculator",
//   type: "github",
// },
// // Portfolio [Mobile]
// {
//   category: "Web Development",
//   title: "Portfolio Website [Mobile-Only]",
//   description:
//     "A website portfolio built using HTML, and CSS. [Built for only mobile]",
//   techStack: ["HTML", "CSS"],
//   link: "https://github.com/dev-duong/Mobile-Website-Portfolio",
//   type: "github",
// },
// // Travel Site
// {
//   category: "Web Development",
//   title: "Responsive Travel Website",
//   description:
//     "A Static portfolio website built using HTML and CSS adhering to the requirements of Web Content Accessibility Guidelines (WCAG)",
//   techStack: ["HTML", "CSS"],
//   link: "https://github.com/dev-duong/Resposive-Travel-Website",
//   type: "github",
// },
// // First Quest
// {
//   category: "Games",
//   title: "First Quest",
//   description: "A C# Console text based game.",
//   techStack: ["C#"],
//   link: "https://github.com/dev-duong/firstQuest",
//   type: "github",
// },
// // Catch Game
// {
//   category: "Games",
//   title: "Catch Game",
//   description: "A simple basket catch game built in Unity.",
//   techStack: ["C#", "HLSL", "ShaderLab", "Unity"],
//   link: "https://github.com/dev-duong/CatchGame",
//   type: "github",
// },
// // Savings Calculator
// {
//   category: "Utility",
//   title: "Saving Calculator",
//   description:
//     "An interactive tool that helps users estimate how much they can split their income by percentage.",
//   techStack: ["C#"],
//   link: "https://github.com/dev-duong/savingsCalculator",
//   type: "github",
// },
// // Real World Journal
// {
//   category: "UI/UX Design",
//   title: "Real World Journal",
//   description:
//     "A logo Design for a fictional journal company called Real World Jounral.",
//   techStack: ["Adobe inDesign", "Adobe Illustrator"],
//   link: RealWorldJournal,
//   type: "pdf",
// },
// // More Than Human
// {
//   category: "UI/UX Design",
//   title: "More Than Human",
//   description:
//     "A critical experience concept design. Includes contextual research, world building, and designs.",
//   techStack: ["Adobe inDesign", "Adobe Photoshop"],
//   link: MoreThanHuman,
//   type: "pdf",
// },
// // Carbon Drone
// {
//   category: "UI/UX Design",
//   title: "Carbon Drone",
//   description:
//     "A critical experience and speculative concept design magazine and statement.",
//   techStack: ["Adobe inDesign", "Adobe Photoshop"],
//   link: [
//     { url: CarbonDrone, type: "pdf" },
//     { url: CarbonDroneStatement, type: "pdf" },
//   ],
//   linkLabel: ["Open Magazine PDF →", "Open Statement PDF →"],
// },
// // Mushroom Font
// {
//   category: "UI/UX Design",
//   title: "Mushroom Font",
//   description: "A custom mushroom themed font.",
//   techStack: ["Adobe inDesign", "Adobe Illustrator"],
//   link: [
//     { url: MushroomFont, type: "pdf" },
//     { url: MushroomFontStatement, type: "pdf" },
//     { url: MushroomLog },
//   ],
//   linkLabel: [
//     "Open Magazine PDF →",
//     "Open Statement PDF →",
//     "Download Font →",
//   ],
// },
//];

// Project Page
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(projectsData.map((p) => p.category))];
  const filteredProjects = (
    selectedCategory
      ? projectsData.filter((p) => p.category === selectedCategory)
      : projectsData
  ).sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageWrapper>
      <main className="pt-28 px-4 w-full max-w-4xl mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
        <section>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <ProjectList
            projects={filteredProjects}
            selectedCategory={selectedCategory}
          />
        </section>

        <footer
          className="fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-0"
        >
          <SocialLinks />
        </footer>
      </main>
    </PageWrapper>
  );
};

export default Projects;
