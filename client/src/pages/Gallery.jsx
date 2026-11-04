import React from "react";
import MasonaryGalleryImg from "../components/GalleryImage/MasonaryGalleryImg";

const Gallery = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        {/* Section Title */}
        <div className="mb-10">
          <span className="bg-pink-100 text-pink-600 font-semibold tracking-widest px-5 py-2 rounded-full shadow-sm text-[15px] font-serif">
            Gallery
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mt-4">
            Visit our customers tour gallery
          </h1>
        </div>

        <MasonaryGalleryImg />
      </div>
    </section>
  );
};

export default Gallery;
