import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { name: "HOME", path: "/home" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center fixed p-4 w-full z-20 text-white transition-all duration-300 ${
        menuOpen ? "bg-[#252525] bg-opacity-90 backdrop-blur" : ""
      }`}
    >
      {/* Branding on the left */}
      <div className="text-xl font-bold">
        <NavLink to="/home">dev.duong</NavLink>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`flex gap-x-4 ${
          menuOpen
            ? "flex-col absolute top-16 left-0 w-full px-5 py-3 bg-[#252525] bg-opacity-90 backdrop-blur"
            : "hidden"
        } sm:flex sm:static sm:flex-row sm:gap-x-4`}
      >
        {pages.map((page) => (
          <NavLink
            key={page.name}
            to={page.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `relative px-2 py-1 cursor-pointer transition-transform duration-200 transform hover:-translate-y-1
               after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
               after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full
               ${isActive ? "after:w-full after:bg-white" : ""}`
            }
          >
            {page.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
