import React from "react";
import noise from "../assets/noise.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${noise})`,
        }}
      >
        <div className="absolute inset-0 bg-[#1c1c1c]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white text-center">
        <div className="flex items-center gap-8">
          {/* Profile Circle */}
          <div className="w-40 h-40 bg-gray-200 rounded-full" />

          {/* Text */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-lg sm:text-2xl font-light">
              Hey I’m <span className="font-bold text-[#C69B5A]">DAT</span>
            </p>
            <div className="hidden md:block h-6 border-l border-white" />
            <p className="text-lg sm:text-2xl font-light">
              View my <span className="font-bold text-[#C69B5A]">PROJECTS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
