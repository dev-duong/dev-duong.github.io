// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Admin Page
const Admin = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <PageWrapper>
        <div>Admin Page</div>
      </PageWrapper>
      <footer className="fixed bottom-0 right-0">
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Admin;
