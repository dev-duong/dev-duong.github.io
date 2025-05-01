// Library
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// Components
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import VerticalCopyright from "./components/layout/Copyright";

// UI
import SocialLinks from "./components/ui/SocialLinks";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white font-mono">
      <Background />
      <VerticalCopyright />
      <Navbar />

      <main className="z-10 relative flex flex-col items-center justify-center pt-20">
        <Routes>
          {/*Random Path Handling */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          {/*Pages*/}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <footer>
        <SocialLinks />
      </footer>
    </div>
  );
}

export default App;
