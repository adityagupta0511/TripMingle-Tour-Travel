import React from "react";
import experienceImg from "../assets/experience.png";

const Experience = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="text-left">
          <span className="bg-pink-100 text-pink-600 font-semibold tracking-widest px-5 py-2 rounded-full shadow-sm text-[15px] font-serif">
            Experience
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mt-4 leading-tight">
            With our all experience we will serve you
          </h1>

          <p className="text-zinc-600 mt-4 text-[17px] leading-relaxed">
            We don’t just plan trips; we create lasting memories. Our experience
            is built on countless journeys and happy travelers. Let’s make your
            next story an unforgettable one.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <div className="text-center">
              <div className="bg-pink-500 text-white text-lg font-bold w-20 h-20 flex justify-center items-center rounded-lg shadow-md">
                12k+
              </div>
              <h3 className="text-lg font-semibold mt-3 text-zinc-700">
                Successful Trip
              </h3>
            </div>

            <div className="text-center">
              <div className="bg-pink-500 text-white text-lg font-bold w-20 h-20 flex justify-center items-center rounded-lg shadow-md">
                2k+
              </div>
              <h3 className="text-lg font-semibold mt-3 text-zinc-700">
                Regular Clients
              </h3>
            </div>

            <div className="text-center">
              <div className="bg-pink-500 text-white text-lg font-bold w-20 h-20 flex justify-center items-center rounded-lg shadow-md">
                15
              </div>
              <h3 className="text-lg font-semibold mt-3 text-zinc-700">
                Years Experience
              </h3>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={experienceImg}
            alt="Traveler Experience"
            className="w-[90%] max-w-[500px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
