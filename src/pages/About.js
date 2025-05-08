// UI
import SocialLinks from "../components/ui/SocialLinks";

// Layout
import Divider from "../components/layout/Divider";

// Assets
import Profile from "../assets/profile.png";
import Icons from "../components/ui/Icons";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

const About = () => {
  // Add icons here, check devicon for names
  const skills = ["react", "html5", "tailwindcss"];
  const tools = ["vscode", "figma", "github"];

  return (
    <main className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 min-h-screen mx-auto flex flex-col justify-center">
      <PageWrapper>
        <section className="flex justify-center items-center mb-5 gap-7">
          <img src={Profile} alt="Portrait of Dat at college graduation" />
          <article className="flex flex-col gap-7">
            <Divider title="profile" />
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </section>

        <section className="flex flex-col mb-7 gap-7 ">
          <Divider title="experience" />

          <article className="flex gap-7">
            <h3 className="whitespace-nowrap text-gray-400">
              Mar 2023 - Oct 2023
            </h3>
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap">
                TechnologyOne | Fortitude Valley, QLD
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>

          <article className="flex gap-7">
            <h3 className="whitespace-nowrap text-gray-400">27 Mar 2024</h3>
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap">IKEA | North Lakes, QLD</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>
        </section>

        <section className="flex flex-col mb-8 gap-7">
          <Divider title="education" />
          <article className="flex gap-7">
            <h3 className="whitespace-nowrap text-gray-400">
              Feb 2020 - Nov 2024
            </h3>
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap">
                Queensland University of Queensland | Brisbane, QLD
              </h3>
              <p className="text-gray-400">
                Bachelor's of Information Technology (Computer Science)
              </p>
            </div>
          </article>
        </section>

        <section className="flex flex-col mb-8 gap-7">
          <Divider title="skills" />
          <article className="flex">
            <Icons icons={skills} />
          </article>
        </section>

        <section className="flex flex-col mb-8 gap-7">
          <Divider title="tools" />
          <article className="flex">
            <Icons icons={tools} />
          </article>
        </section>

        <section className="mb-8">
          <Divider title="other info" />
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
