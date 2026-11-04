import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import { useLocation } from "react-router-dom";
import TourCard from "../components/FeaturedTours/TourCard";
import { BASE_URL } from "../utils/config";
import bgImage from "../assets/tour.jpg";

const SearchResultList = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tours based on search query
  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const search = searchParams.get("search");

      // If search query is empty
      if (!search || !search.trim()) {
        setData([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // Call backend search API
        const res = await fetch(
          `${BASE_URL}/tours/search/tour?search=${encodeURIComponent(search)}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch tours");
        }

        const result = await res.json();

        // Store fetched tours
        setData(result.data || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div>
      <CommonSection
        title={"Tour Search Results"}
        bgImage={bgImage}
      />

      <section className="max-w-6xl mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center text-zinc-600 py-10">
            Loading tours...
          </div>
        ) : data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center text-zinc-600 mt-16">
            <h2 className="text-2xl font-semibold mb-3">
              No tours found 😕
            </h2>

            <p className="text-sm text-zinc-500">
              Try searching with a different destination or country.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchResultList;
