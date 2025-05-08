// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

const About = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      <PageWrapper>
        <section>
          <h1>About Page</h1>
        </section>
      </PageWrapper>
      <footer className="fixed bottom-0 right-0">
        <SocialLinks />
      </footer>
    </main>
  );
};

export default About;
