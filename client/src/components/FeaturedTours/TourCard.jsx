import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import calculateAvgRating from "../../utils/avgRating";

const TourCard = ({ tour }) => {
  const {
    _id,
    title,
    city,
    photo,
    price,
    featured,
    reviews = [],
  } = tour;

  // Always use the actual MongoDB ID
  const tourId = _id;

  // Calculate average rating
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Check MongoDB ID
  if (!tourId) {
    console.error("MongoDB Tour ID is missing:", tour);

    return (
      <div className="bg-white shadow-md rounded-2xl p-5">
        <p className="text-red-500 font-semibold">
          Tour ID is missing
        </p>
      </div>
    );
  }

  return (
    <Link
      to={`/tours/${tourId}`}
      className="block bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={photo}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {featured && (
          <span className="absolute bottom-3 right-3 bg-rose-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
            Featured
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">

        {/* City & Rating */}
        <div className="flex justify-between items-center text-zinc-600 text-sm">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-pink-500" />
            {city}
          </span>

          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />

            {totalRating === 0 ? (
              "Not rated"
            ) : (
              <>
                {avgRating}
                <span className="text-zinc-600">
                  ({totalRating})
                </span>
              </>
            )}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-zinc-800 hover:text-pink-600 transition">
          {title}
        </h2>

        {/* Price & Book Now */}
        <div className="flex justify-between items-center mt-3">
          <h3 className="text-lg font-bold text-zinc-800">
            ${price}{" "}
            <span className="text-zinc-600 text-sm font-normal">
              /per person
            </span>
          </h3>

          <span className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
            Book Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;