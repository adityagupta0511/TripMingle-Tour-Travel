import React from "react";
import galleryImages from "./galleryImages";

const MasonaryGalleryImg = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {galleryImages.map((item, index) => (
        <img
          src={item}
          key={index}
          alt={`gallery-${index}`}
          className="w-full mb-4 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg transition-transform duration-300"
        />
      ))}
    </div>
  );
};

export default MasonaryGalleryImg;
