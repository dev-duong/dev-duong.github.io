import noise from "../../assets/noise.png";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Background image */}
      <div
        className="w-full h-full bg-repeat bg-center"
        style={{ backgroundImage: `url(${noise})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#252525] opacity-95" />
    </div>
  );
};

export default Background;
