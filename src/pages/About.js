// UI
import SocialLinks from "../components/ui/SocialLinks";

// Assets
import { ReactComponent as Placeholder } from "../assets/placeholder.svg";
import Profile from "../assets/profile.png";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

const About = () => {
  return (
    <main className="flex flex-col  items-center w-1/2">
      <PageWrapper>
        <section className="flex">
          <img src={Profile} alt="Dat at Graduation" />
          <article>
            <h2 className="text-2xl">Hi I'm Dat</h2>
            <p></p>
          </article>
        </section>
        <section>
          <h1 className="text-2xl">Skills</h1>
        </section>
        <section>
          <h1 className="text-2xl">Tools</h1>
          <article className="flex">
            <Placeholder className="w-12 h-12" />
            <Placeholder className="w-12 h-12" />
            <Placeholder className="w-12 h-12" />
            <Placeholder className="w-12 h-12" />
            <Placeholder className="w-12 h-12" />
          </article>
        </section>
        <section>
          <h1 className="text-2xl">Other Info</h1>
        </section>
      </PageWrapper>
      <footer className="fixed bottom-0 right-0">
        <PageWrapper>
          <SocialLinks />
        </PageWrapper>
      </footer>
    </main>
  );
};

export default About;
