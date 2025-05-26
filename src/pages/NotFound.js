// UI
import SocialLinks from "../components/universal/layout/SocialLinks";

// Animations
import PageWrapper from "../components/universal/animations/PageWrapper";

// Home Page
const Home = () => {
  return (
    <PageWrapper>
      <main className="pt-28 px-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mx-auto flex flex-col justify-center flex-grow pb-20 md:pb-0 text-center">
        {/* Body */}
        <article>
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <a
            href="/home"
            className="text-blue-400 underline hover:text-blue-600 transition"
          >
            Go back Home
          </a>
        </article>

        {/* Footer */}
        <footer
          className="absolute md:fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-0"
        >
          <SocialLinks />
        </footer>
      </main>
    </PageWrapper>
  );
};

export default Home;
