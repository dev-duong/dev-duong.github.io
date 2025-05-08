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
      <footer className="fixed bottom-0 right-0">
        <SocialLinks />
      </footer>
    </main>
  );
};

export default Home;
