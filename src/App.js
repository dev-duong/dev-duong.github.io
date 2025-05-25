// Library
import { Navigate, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/projects/ProjectDetail";

// Components
import Background from "./components/universal/layout/Background";
import Navbar from "./components/universal/layout/Navbar";
import VerticalCopyright from "./components/universal/layout/Copyright";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden max-w-full text-white">
      <Background />
      <VerticalCopyright />
      <Navbar />

      <main className="z-10 relative flex flex-col items-center justify-center">
        <Routes>
          {/*Random Path Handling */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />

          {/*Pages*/}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
