import { useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import VerticalCopyright from "./components/Copyright";

function App() {
  const [activePage, setActivePage] = useState("HOME");

  const renderPage = () => {
    switch (activePage) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "PROJECTS":
        return <Projects />;
      case "RESUME":
        return <Resume />;
      case "CONTACT":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-mono">
      <Background />
      <VerticalCopyright />
      <Navbar onNavClick={setActivePage} activePage={activePage} />
      <main className="z-10 relative flex flex-col items-center justify-center h-screen space-y-6">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
