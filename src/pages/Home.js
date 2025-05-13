// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Home Page
const Home = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      <PageWrapper>
        <div className="h-[calc(100vh-80px)] mt-[-80px] flex items-center justify-center">
          <div className="flex flex-col text-center">
            <h1 className="text-6xl">Dat Duong</h1>
            <h2 className="text-4xl text-myOrange">UI/UX DESIGNER</h2>
          </div>
        </div>
      </PageWrapper>
      <footer className="fixed bottom-0">
        <div className="flex text-center w-full">
          <PageWrapper>
            <p className="mb-3 text-center text-sm">
              Designed using <strong className="text-myOrange">Figma</strong>{" "}
              and coded in{" "}
              <strong className="text-myOrange">Visual Studio Code</strong> by
              me. <br />
              Built using <strong className="text-myOrange">
                ReactJS
              </strong> and{" "}
              <strong className="text-myOrange">TailwindCSS</strong>, deployed
              using <strong className="text-myOrange">GitHub Pages</strong>.
            </p>
          </PageWrapper>

          <div
            className="absolute md:fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-0"
          >
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
