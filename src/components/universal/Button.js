const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center  w-1/3 bg-myOrange text-black hover:bg-orange-400 transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-2xl cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button;
