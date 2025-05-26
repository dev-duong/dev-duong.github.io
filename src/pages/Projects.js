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
      <main className="pt-28 px-4 w-full max-w-3xl mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
        {/* Body */}
        <article>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <ProjectList
            projects={filteredProjects}
            selectedCategory={selectedCategory}
          />
        </article>

        {/* Footer */}
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
