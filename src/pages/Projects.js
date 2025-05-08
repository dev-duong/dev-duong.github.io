// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Project Page
const Projects = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      <PageWrapper>
        <div>Project Page</div>
      </PageWrapper>
      <footer className="fixed bottom-0 right-0">
        <PageWrapper>
          <SocialLinks />
        </PageWrapper>
      </footer>
    </main>
  );
};

export default Projects;
