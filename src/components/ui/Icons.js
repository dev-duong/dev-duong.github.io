import "devicon/devicon.min.css";

const Icons = ({ icons }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="w-16 h-16 rounded-xl flex items-center justify-center shadow bg-gray-600 hover:bg-gray-700 transition-colors"
        >
          <i
            className={`devicon-${icon}-plain colored text-4xl text-white`}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default Icons;
