import "devicon/devicon.min.css";

const Icons = ({ icons }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="group relative w-16 h-16 rounded-xl flex items-center justify-center shadow bg-gray-600 hover:bg-gray-700 transition-colors"
        >
          <i
            className={`devicon-${icon}-plain colored text-4xl text-white`}
          ></i>

          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {icon.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
