// UI
import SocialLinks from "../components/ui/SocialLinks";

// Animations
import PageWrapper from "../components/layout/PageWrapper";

// Contact Page
const Contact = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <PageWrapper>
        <h1 className="text-2xl">Contact Page</h1>
        <SocialLinks size="lg" />
      </PageWrapper>
    </main>
  );
};

export default Contact;
