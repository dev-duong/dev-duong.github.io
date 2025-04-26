const Navbar = ({ onNavClick }) => {
  const pages = ["HOME", "ABOUT", "PROJECTS", "RESUME", "CONTACT"];

  return (
    <nav className="flex space-x-4 p-4">
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
