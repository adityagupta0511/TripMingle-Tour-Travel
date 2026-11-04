import React from "react";
import TourCard from "../FeaturedTours/TourCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/featured/tour`);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading tours...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading tours: {error}
      </div>
    );
  }

  if (!tours || tours.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No tours found.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-10">
      {tours.map((tour) => (
        <div className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedTourList;