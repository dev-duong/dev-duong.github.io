import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

// UI
import SocialLinks from "../components/ui/SocialLinks";
import ProjectCard from "../components/ui/ProjectCard";
import CategoryFilter from "../components/ui/CategoryFilter";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Pages
import projectsData from "./data/ProjectData";

// Project PDFs
import RealWorldJournal from "../assets/Projects/RealWorldJournal.pdf";
import MoreThanHuman from "../assets/Projects/MoreThanHuman.pdf";
import CarbonDrone from "../assets/Projects/CarbonDrone.pdf";
import CarbonDroneStatement from "../assets/Projects/CarbonDroneStatement.pdf";
import MushroomFont from "../assets/Projects/MushroomFont.pdf";
import MushroomFontStatement from "../assets/Projects/MushroomFontStatement.pdf";
import MushroomLog from "../assets/Projects/MushroomLog.otf";

// All Projects
const allProjects = [
  // // Portfolio V1
  // {
  //   category: "Web Development",
  //   title: "Portfolio Website V1",
  //   description:
  //     "A Static portfolio website built using HTML and CSS [No longer Live].",
  //   tags: ["HTML", "CSS", "GitHub Pages"],
  //   link: "https://github.com/dev-duong/v1-dev-duong.github.io",
  //   type: "github",
  // },
  // // Web Calculator
  // {
  //   category: "Web Development",
  //   title: "Web-Calculator",
  //   description:
  //     "A web-based calculator built using HTML, CSS, and JavaScript, providing basic arithmetic functionality with a user-friendly interface.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   link: "https://github.com/dev-duong/Web-Calculator",
  //   type: "github",
  // },
  // // Portfolio [Mobile]
  // {
  //   category: "Web Development",
  //   title: "Portfolio Website [Mobile-Only]",
  //   description:
  //     "A website portfolio built using HTML, and CSS. [Built for only mobile]",
  //   tags: ["HTML", "CSS"],
  //   link: "https://github.com/dev-duong/Mobile-Website-Portfolio",
  //   type: "github",
  // },
  // // Travel Site
  // {
  //   category: "Web Development",
  //   title: "Responsive Travel Website",
  //   description:
  //     "A Static portfolio website built using HTML and CSS adhering to the requirements of Web Content Accessibility Guidelines (WCAG)",
  //   tags: ["HTML", "CSS"],
  //   link: "https://github.com/dev-duong/Resposive-Travel-Website",
  //   type: "github",
  // },
  // // First Quest
  // {
  //   category: "Games",
  //   title: "First Quest",
  //   description: "A C# Console text based game.",
  //   tags: ["C#"],
  //   link: "https://github.com/dev-duong/firstQuest",
  //   type: "github",
  // },
  // // Catch Game
  // {
  //   category: "Games",
  //   title: "Catch Game",
  //   description: "A simple basket catch game built in Unity.",
  //   tags: ["C#", "HLSL", "ShaderLab", "Unity"],
  //   link: "https://github.com/dev-duong/CatchGame",
  //   type: "github",
  // },
  // // Savings Calculator
  // {
  //   category: "Utility",
  //   title: "Saving Calculator",
  //   description:
  //     "An interactive tool that helps users estimate how much they can split their income by percentage.",
  //   tags: ["C#"],
  //   link: "https://github.com/dev-duong/savingsCalculator",
  //   type: "github",
  // },
  // // Real World Journal
  // {
  //   category: "UI/UX Design",
  //   title: "Real World Journal",
  //   description:
  //     "A logo Design for a fictional journal company called Real World Jounral.",
  //   tags: ["Adobe inDesign", "Adobe Illustrator"],
  //   link: RealWorldJournal,
  //   type: "pdf",
  // },
  // // More Than Human
  // {
  //   category: "UI/UX Design",
  //   title: "More Than Human",
  //   description:
  //     "A critical experience concept design. Includes contextual research, world building, and designs.",
  //   tags: ["Adobe inDesign", "Adobe Photoshop"],
  //   link: MoreThanHuman,
  //   type: "pdf",
  // },
  // // Carbon Drone
  // {
  //   category: "UI/UX Design",
  //   title: "Carbon Drone",
  //   description:
  //     "A critical experience and speculative concept design magazine and statement.",
  //   tags: ["Adobe inDesign", "Adobe Photoshop"],
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
  //   tags: ["Adobe inDesign", "Adobe Illustrator"],
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
];

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
    <main className="p-28 px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
      <PageWrapper>
        <section>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <article
            className="flex flex-col gap-7 mb-10 pr-4 overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "70vh" }} // or choose height based on your layout
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory || "all"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-7 mb-10 pr-4 overflow-y-auto custom-scrollbar"
                style={{ maxHeight: "70vh" }}
              >
                {filteredProjects.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="block no-underline hover:no-underline"
                  >
                    <ProjectCard {...project} />
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </article>
        </section>
      </PageWrapper>

      <footer className="absolute md:fixed bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-4">
        <PageWrapper>
          <SocialLinks />
        </PageWrapper>
      </footer>
    </main>
  );
};

export default Projects;
