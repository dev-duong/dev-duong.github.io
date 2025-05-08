// UI
import SocialLinks from "../components/ui/SocialLinks";

// Assets
import Profile from "../assets/profile.png";
import Icons from "../components/ui/Icons";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

const About = () => {
  const skills = ["react", "html5", "tailwindcss"];
  const tools = ["vscode", "figma", "github"];

  return (
    <main className="flex flex-col items-center justify-center w-full md:w-1/2 min-h-screen mx-auto">
      <PageWrapper>
        <section className="flex mb-8">
          <img src={Profile} alt="Dat at Graduation" />
          <article>
            <h2 className="text-2xl">Hi I'm Dat</h2>
            <p></p>
          </article>
        </section>
        <section className="mb-8">
          <h1 className="text-2xl">Skills</h1>
          <article className="flex">
            <Icons icons={skills} />
          </article>
        </section>
        <section className="mb-8">
          <h1 className="text-2xl">Tools</h1>
          <article className="flex">
            <Icons icons={tools} />
          </article>
        </section>
        <section className="mb-8">
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
