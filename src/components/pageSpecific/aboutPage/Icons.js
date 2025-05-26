import "devicon/devicon.min.css";

const Icons = ({ icons = [] }) => {
  return (
    <div className="flex gap-3 flex-wrap justify-between">
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14
            rounded-xl flex items-center justify-center
            p-1 sm:p-2 md:p-3 lg:p-3
            shadow bg-gray-600 hover:bg-gray-700 transition-colors"
        >
          <i
            className={`devicon-${icon}-plain colored 
                text-2xl sm:text-3xl md:text-4xl lg:text-4xl 
                text-white`}
          ></i>

          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 px-2 py-1 text-xs sm:text-xs lg:text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {icon.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
