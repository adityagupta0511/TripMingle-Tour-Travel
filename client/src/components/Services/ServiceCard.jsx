import React from "react";

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;

  return (
    <div className="bg-zinc-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center bg-pink-500 rounded-full">
          <img src={imgUrl} alt={title} className="w-10 h-10 object-contain" />
        </div>

        <h5 className="text-xl font-semibold text-zinc-800">{title}</h5>
        <p className="text-zinc-600 text-md leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
