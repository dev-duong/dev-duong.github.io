// UI
import SocialLinks from "../components/ui/SocialLinks";
import TextBox from "../components/ui/TextBox";

// Layout
import Divider from "../components/layout/Divider";

// Assets
import Profile from "../assets/profile.png";
import Icons from "../components/ui/Icons";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

const About = () => {
  // Add icons here, check devicon for names
  const skills = ["csharp", "css3", "python", "react", "html5", "tailwindcss"];
  const tools = ["git", "github", "vscode", "figma", "notion"];

  return (
    <main className="pt-16 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 min-h-screen mx-auto flex flex-col justify-center">
      <PageWrapper>
        <section className="flex lg:flex-row md:flex-col justify-center items-center mb-5 gap-7">
          <img src={Profile} alt="Portrait of Dat at college graduation" />
          <article className="flex flex-col gap-7">
            <Divider title="profile" />
            <p className="text-gray-400">
              I'm a Computer Science graduate with a passion for UX/UI design
              and front-end development. I specialize in crafting intuitive,
              responsive web and mobile experiences using HTML, CSS, React.js,
              and Tailwind.
            </p>
          </article>
        </section>

        <section className="flex flex-col mb-7 gap-7 ">
          <Divider title="experience" />

          <article className="flex gap-7">
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap text-gray-400">
                Mar 2023 - Oct 2023
              </h3>
              <div className="flex flex-row gap-2">
                <TextBox
                  text="HTML"
                  bgColor="bg-blue-400"
                  textColor="text-black"
                />

                <TextBox
                  text="REACT"
                  bgColor="bg-blue-400"
                  textColor="text-black"
                />
                <TextBox
                  text="TAILWIND"
                  bgColor="bg-blue-400"
                  textColor="text-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap">
                TechnologyOne | Fortitude Valley, QLD
              </h3>
              <p className="text-gray-400">
                As a Lead UX/UI Designer and Consultant, I collaborated on
                front-end development using HTML, CSS, React.js, and Tailwind. I
                facilitated client discussions and promoted team collaboration
                to deliver both mobile and web applications.
              </p>
            </div>
          </article>

          <article className="flex gap-7">
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap text-gray-400">
                Mar 2024 - Mar 2024
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="whitespace-nowrap">IKEA | North Lakes, QLD</h3>
              <p className="text-gray-400">
                Supported the installation and replacement of Cisco network
                switchboards, ensuring precise cable management and seamless
                team coordination.
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
                Queensland University of Technology | Brisbane, QLD
              </h3>
              <p className="text-gray-400">
                Bachelor's of Information Technology (Computer Science)
              </p>
            </div>
          </article>
        </section>

        <section className="flex flex-col mb-8 gap-7">
          <Divider title="skills" />
          <article className="flex justify-center">
            <Icons icons={skills} />
          </article>
        </section>

        <section className="flex flex-col mb-8 gap-7">
          <Divider title="tools" />
          <article className="flex justify-center">
            <Icons icons={tools} />
          </article>
        </section>

        <section className="flex flex-col mb-8 gap-7">
          <Divider title="other info" />
          <article className="flex gap-7">
            <h3 className="whitespace-nowrap">CERTIFICATIONS</h3>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400">
                Australian Open "O" Class Driver's Licence
              </p>
              <p className="text-gray-400">Forklift License (LF)</p>
              <p className="text-gray-400">
                Responsible Service of Alcohol (RSA)
              </p>
            </div>
          </article>
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
