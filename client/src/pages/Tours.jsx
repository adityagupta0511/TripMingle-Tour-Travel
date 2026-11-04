import React, { useState } from "react";
import CommonSection from "../shared/CommonSection";
import bgImage from "../assets/tour.jpg";
import TourCard from "../components/FeaturedTours/TourCard";
import Newletter from "../pages/Newletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [page, setPage] = useState(0);

  const toursPerPage = 8;

  // Fetch all tours from MongoDB
  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours`);

  // Ensure tours is always an array
  const allTours = Array.isArray(tours) ? tours : [];

  // Calculate total number of pages
  const pageCount = Math.ceil(allTours.length / toursPerPage);

  // Get tours for the current page
  const displayedTours = allTours.slice(
    page * toursPerPage,
    (page + 1) * toursPerPage
  );

  return (
    <div className="bg-white">
      <CommonSection title="All Tours" bgImage={bgImage} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Tours List */}
        <section className="py-10">
          <div className="container mx-auto px-4">

            {/* Loading */}
            {loading && (
              <div className="text-center py-16 text-gray-500 text-lg">
                Loading tours...
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="text-center py-16 text-red-500 text-lg">
                Error loading tours: {String(error)}
              </div>
            )}

            {/* No Tours */}
            {!loading && !error && allTours.length === 0 && (
              <div className="text-center py-16 text-gray-500 text-lg">
                No tours found.
              </div>
            )}

            {/* Tours Grid */}
            {!loading && !error && allTours.length > 0 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {displayedTours.map((tour) => (
                    <TourCard
                      key={tour._id}
                      tour={tour}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {pageCount > 1 && (
                  <div className="flex justify-center items-center mt-12 gap-3 flex-wrap">

                    {Array.from(
                      { length: pageCount },
                      (_, index) => index
                    ).map((number) => (
                      <button
                        key={number}
                        type="button"
                        onClick={() => {
                          setPage(number);
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        className={`w-10 h-10 rounded-full flex justify-center items-center border border-pink-300 text-lg font-semibold transition-all duration-200 ${
                          page === number
                            ? "bg-pink-500 text-white scale-110"
                            : "bg-white text-pink-600 hover:bg-pink-100"
                        }`}
                      >
                        {number + 1}
                      </button>
                    ))}

                  </div>
                )}
              </>
            )}

          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="-mt-10">
        <div className="container mx-auto">
          <Newletter />
        </div>
      </section>
    </div>
  );
};

export default Tours;