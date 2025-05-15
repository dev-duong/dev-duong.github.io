const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          className={`px-4 py-1 rounded-full border transition-colors duration-300 ease-in-out
            ${
              selected === category || (category === "All" && !selected)
                ? "bg-myOrange text-black border-myOrange"
                : "bg-transparent text-gray-300 border-gray-500 hover:border-white hover:text-white"
            }`}
          onClick={() => onSelect(category === "All" ? null : category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
