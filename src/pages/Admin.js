// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Admin Page
const Admin = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      <PageWrapper>
        <section>
          <h1>Admin Page</h1>
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

export default Admin;
