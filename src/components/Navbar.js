import { NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { name: "HOME", path: "/home" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "RESUME", path: "/resume" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 left-0 w-full z-20">
      {/* Branding on the left */}
      <div className="text-xl font-bold">
        <NavLink to="/home">dev.duong</NavLink>
      </div>

      {/* Navigation links on the right */}
      <div className="flex gap-x-4">
        {pages.map((page) => (
          <NavLink
            key={page.name}
            to={page.path}
            className={({ isActive }) =>
              `cursor-pointer ${isActive ? "underline" : ""}`
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
