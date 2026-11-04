import React from "react";
import FeaturedTourList from "../components/FeaturedTours/FeaturedTourList";

const Featured = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center pt-15">
        {/* Section Title */}
        <div className="mb-10">
          <span className="bg-pink-100 text-pink-600 font-semibold tracking-widest px-5 py-2 rounded-full shadow-sm text-[15px] font-serif">
            Explore
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mt-4">
            Our Featured Tours
          </h1>

          <p className="text-zinc-600 mt-3 text-lg max-w-2xl mx-auto">
            Discover breathtaking destinations and unforgettable experiences —
            handpicked just for you.
          </p>
        </div>

        {/* Featured Tour Cards */}
        <FeaturedTourList />
      </div>
    </section>
  );
};

export default Featured;
