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
          <article>
            <Divider title="Projects" />
          </article>
        </section>
      </PageWrapper>
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

export default Projects;
