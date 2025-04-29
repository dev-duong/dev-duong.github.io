const Navbar = ({ onNavClick, activePage }) => {
  const pages = ["HOME", "ABOUT", "PROJECTS", "RESUME", "CONTACT"];

  return (
    <nav className="flex justify-end gap-x-4 p-4 fixed top-0 left-0 w-full z-20">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onNavClick(page)}
          className={`cursor-pointer ${activePage === page ? "underline" : ""}`}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
