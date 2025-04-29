import { Link } from "react-router-dom";

const Navbar = ({ onNavClick }) => {
  const pages = ["HOME", "ABOUT", "PROJECTS", "RESUME", "CONTACT"];

  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 left-0 w-full z-20">
      {/* Left side: Branding */}
      <Link to="/home" className="text-xl font-bold">
        dev.duong
      </Link>

      {/* Right side: Page Links */}
      <div className="flex gap-x-4">
        {pages.map((page) => (
          <Link
            key={page}
            to={`/${page.toLowerCase()}`}
            className="cursor-pointer"
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
