// UI
import SocialLinks from ".././components/universal/layout/SocialLinks";

// Animations
import PageWrapper from "../components/universal/animations/PageWrapper";

// Admin Page
const Admin = () => {
  return (
    <PageWrapper>
      <main className="h-screen flex flex-col items-center justify-center text-center">
        <section>
          <h1>Admin Page</h1>
        </section>

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

export default Admin;
