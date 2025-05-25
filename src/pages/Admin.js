// UI
import SocialLinks from "../components/ui/links/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Admin Page
const Admin = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <PageWrapper>
        <section>
          <h1>Admin Page</h1>
        </section>
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

export default Admin;
