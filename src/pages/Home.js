// UI Imports
import SocialLinks from "../components/universal/layout/SocialLinks";
import Typewriter from "../components/pageSpecific/homePage/Typewrite";

// Page Components
import Credits from "../components/pageSpecific/homePage/Credits";

// Layout Imports
import PageWrapper from "../components/universal/animations/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <main className="pt-16 px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0">
        <div className="h-[calc(100vh-80px)] mt-[-80px] flex items-center justify-center">
          <div className="flex flex-col text-center gap-4">
            <h1 className="text-6xl font-bold whitespace-nowrap">Dat Duong</h1>
            <Typewriter words={["UI/UX Designer", "Front-End Developer"]} />
          </div>
        </div>

        <footer className="fixed inset-x-0 bottom-0 w-full">
          <div className="flex flex-col items-center px-4 py-2 text-center">
            <Credits />

            <div className="md:absolute md:bottom-2 md:right-4">
              <SocialLinks />
            </div>
          </div>
        </footer>
      </main>
    </PageWrapper>
  );
};

export default Home;
