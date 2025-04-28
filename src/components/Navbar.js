const Navbar = ({ onNavClick }) => {
  const pages = ["HOME", "ABOUT", "PROJECTS", "RESUME", "CONTACT"];

  return (
    <nav className="flex space-x-4 p-4 fixed top-0 left-0 w-full z-20">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onNavClick(page)}
          className="cursor-pointer"
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
