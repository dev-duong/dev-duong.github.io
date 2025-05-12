// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Home Page
const Home = () => {
  return (
    <main className="pt-20 flex flex-col items-center text-center">
      <PageWrapper>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <a
          href="/home"
          className="text-blue-400 underline hover:text-blue-600 transition"
        >
          Go back Home
        </a>
      </PageWrapper>
      <footer
        className="absolute md:fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-full
             md:left-auto md:translate-x-0 md:justify-end md:items-end md:right-0"
      >
        <PageWrapper>
          <SocialLinks />
        </PageWrapper>
      </footer>
    </main>
  );
};

export default Home;
