import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "RESUME", path: "/resume" },
    { name: "CONTACT", path: "/contact" },
  ];

  const location = useLocation();

  return (
    <nav className="flex justify-end gap-x-4 p-4 fixed top-0 left-0 w-full z-20">
      {pages.map((page) => (
        <Link
          key={page.name}
          to={page.path}
          className={`cursor-pointer ${
            location.pathname === page.path ? "underline" : ""
          }`}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
