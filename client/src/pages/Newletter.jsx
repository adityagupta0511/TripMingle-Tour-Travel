import React from "react";
import maleTourist from "../assets/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="bg-pink-200 md:pb-5 overflow-hidden mt-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 px-6 md:px-25">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-800 mb-4 leading-snug">
            Subscribe now to get useful <br className="hidden sm:block" />
            traveling information.
          </h2>

          {/* Input + Button */}
          <form className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-white rounded-md overflow-hidden w-full max-w-md mx-auto lg:mx-0 shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm sm:text-base outline-none"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 text-sm sm:text-base transition-all duration-200"
            >
              Subscribe
            </button>
          </form>

          {/* Paragraph */}
          <p className="text-zinc-700 text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0">
            Stay updated with travel tips, destination guides, and exclusive
            offers. Get everything you need to plan your next adventure —
            straight to your inbox!
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <img
            src={maleTourist}
            alt="Male Tourist"
            className="w-64 sm:w-72 md:w-80 lg:w-[480px] xl:w-[520px] object-contain translate-y-4 lg:translate-y-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
