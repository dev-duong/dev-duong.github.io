// UI
import SocialLinks from "../components/universal/layout/SocialLinks";

// Animations
import PageWrapper from "../components/universal/animations/PageWrapper";

// Contact Page
const Contact = () => {
  return (
    <PageWrapper>
      <main className="h-screen flex flex-col items-center justify-center text-center">
        {/* Body */}
        <h1 className="text-2xl">Contact Me</h1>
        <SocialLinks size="lg" />
      </main>
    </PageWrapper>
  );
};

export default Contact;
