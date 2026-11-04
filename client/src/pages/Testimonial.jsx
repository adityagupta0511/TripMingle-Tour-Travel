import React from "react";
import Testimonials from "../components/Testimonial/Testimonials";

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center pt-10">
        {/* Section Title */}
        <div className="">
          <span className="bg-pink-100 text-pink-600 font-semibold tracking-widest px-5 py-2 rounded-full shadow-sm text-[15px] font-serif">
            Fans Love
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mt-4">
            What our fans say about us
          </h1>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default Testimonial;
