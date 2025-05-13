// UI
import SocialLinks from "../components/ui/SocialLinks";
import ProjectCard from "../components/ui/ProjectCard";

// Layout
import Divider from "../components/layout/Divider";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Project Page
const Projects = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      <PageWrapper>
        <section>
          <article className="flex flex-col gap-7">
            <Divider title="2025" />
            <ProjectCard
              image="/images/my-project.jpg"
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with React and Tailwind CSS."
              tags={["React", "Tailwind", "Framer Motion"]}
              link="https://example.com"
            />
            <Divider title="2024" />
            <ProjectCard
              image="/images/my-project.jpg"
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with React and Tailwind CSS."
              tags={["React", "Tailwind", "Framer Motion"]}
              link="https://example.com"
            />
            <ProjectCard
              image="/images/my-project.jpg"
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with React and Tailwind CSS."
              tags={["React", "Tailwind", "Framer Motion"]}
              link="https://example.com"
            />
            <Divider title="2023" />
            <ProjectCard
              image="/images/my-project.jpg"
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with React and Tailwind CSS."
              tags={["React", "Tailwind", "Framer Motion"]}
              link="https://example.com"
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
