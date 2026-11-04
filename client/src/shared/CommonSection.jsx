// CommonSection.jsx
import React from "react";

const CommonSection = ({ title, bgImage }) => {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
