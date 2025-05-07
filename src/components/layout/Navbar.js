import { NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { name: "HOME", path: "/home" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center fixed p-5 w-full z-20">
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
