const Divider = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="uppercase text-2xl whitespace-nowrap">{title}</span>
      <div
        className="flex-grow border-t-[2px]"
        style={{ borderColor: "#f1f1f1" }}
      />
    </div>
  );
};

export default Divider;
