import React from "react";
import heroImg from "../assets/hero-img01.jpg";
import heroImg2 from "../assets/hero-img02.jpg";
import heroVid from "../assets/hero-video.mp4";
import worldImg from "../assets/world.png";

const Hero = () => {
  return (
    <section className="pt-[100px] bg-white flex-1">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between pt-10 pb-2 md:pt-14 md:pb-2 gap-8">

        {/* LEFT SIDE CONTENT */}
        <div className="flex-1">
          {/* Subtitle */}
          <div className="flex items-center gap-3 text-xl">
            <span className="bg-pink-100 text-pink-600 font-semibold tracking-widest 
           px-4 py-2 rounded-full shadow-sm text-[15px] font-serif italic">
              Know Before You Go
            </span>
            <img
              src={worldImg}
              alt="world"
              className="h-[35px] w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-zinc-800">
            Explore the world, and make every <span className="text-pink-500">moment</span> count
          </h1>

          {/* Paragraph */}
          <p className="mt-5 text-zinc-600 text-[17px] leading-relaxed max-w-xl">
            The world is full of wonders waiting to be explored by you.
            Feel the joy of traveling, connecting, and living every moment to the fullest.
            Because with <span className="text-pink-500 font-semibold">TripMingle</span>, 
            journeys turn into memories that never fade.
          </p>
          
        </div>

        {/* RIGHT SIDE IMAGES & VIDEO */}
        <div className="flex-1 flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-5 mt-6 md:mt-0">
          <img
            src={heroImg}
            alt="travel"
            className="md:w-[180px] h-[280px] object-cover rounded-2xl shadow-lg"
          />

          <video
            src={heroVid}
            autoPlay
            loop
            muted
            className="md:w-[180px] h-[280px] object-cover rounded-2xl shadow-lg md:mt-10"
          />

          <img
            src={heroImg2}
            alt="travel"
            className="md:w-[180px] h-[280px] object-cover rounded-2xl shadow-lg md:mt-16"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
