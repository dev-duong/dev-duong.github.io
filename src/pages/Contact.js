// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Contact Page
const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <PageWrapper>
        <div className="text-2xl mb-6">Contact Page</div>
        <SocialLinks size="lg" />
      </PageWrapper>
    </div>
  );
};

export default Contact;
