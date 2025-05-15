// UI
import SocialLinks from "../components/ui/SocialLinks";
import Typewriter from "../components/ui/Typewrite";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Home Page
const Home = () => {
  return (
    <main className="pt-16 px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
      <PageWrapper>
        <div className="h-[calc(100vh-80px)] mt-[-80px] flex items-center justify-center">
          <div className="flex flex-col text-center gap-4">
            <h1 className="text-6xl font-bold">Dat Duong</h1>
            <Typewriter words={["UI/UX Designer", "Front-End Developer"]} />
          </div>
        </div>
      </PageWrapper>
      <footer className="fixed bottom-0 w-full">
        <div className="flex flex-col items-center px-4 py-2 text-center">
          <PageWrapper>
            <p className="text-sm mb-2 md:mb-0 text-center md:text-center md:w-full p-4">
              Designed using <strong>Figma</strong> and coded in{" "}
              <strong>Visual Studio Code</strong> by me.{" "}
              <br className="hidden md:block" />
              Built using <strong>ReactJS</strong> and{" "}
              <strong>TailwindCSS</strong>, deployed using{" "}
              <strong>GitHub Pages</strong>.
            </p>
          </PageWrapper>

          <div className="md:absolute md:bottom-2 md:right-4">
            <PageWrapper>
              <SocialLinks />
            </PageWrapper>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
