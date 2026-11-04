import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

import { IoStar } from "react-icons/io5";

import {
  PiMapPinSimpleFill,
  PiUsersThreeFill,
  PiCurrencyDollarSimpleBold,
} from "react-icons/pi";

import { RiPinDistanceFill } from "react-icons/ri";

import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/avatar.jpg";
import Booking from "../components/Booking/Booking";
import { BASE_URL } from "../utils/config";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const reviewMsgRef = useRef(null);

  const [tourRating, setTourRating] = useState(null);
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch tour details from MongoDB using the actual MongoDB ID
  useEffect(() => {
    let cancelled = false;

    const fetchTour = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${BASE_URL}/tours/${id}`);

        if (!response.ok) {
          throw new Error("Tour not found");
        }

        const result = await response.json();

        if (!cancelled) {
          setTour(result.data || null);
        }
      } catch (error) {
        console.error("Error fetching tour details:", error);

        if (!cancelled) {
          setTour(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchTour();

    return () => {
      cancelled = true;
    };
  }, [id]);

  // Show loading while tour is being fetched
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-zinc-600">
          Loading tour details...
        </p>
      </div>
    );
  }

  // Show message if tour was not found
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-zinc-800">
          Tour not found
        </h2>

        <p className="text-zinc-600">
          The tour you are looking for does not exist.
        </p>

        <button
          onClick={() => navigate("/tours")}
          className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
        >
          Back to Tours
        </button>
      </div>
    );
  }

  // Tour data
  const {
    photo,
    title,
    desc,
    price,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour;

  // Reviews populated from MongoDB
  const reviews = Array.isArray(tour.reviews) ? tour.reviews : [];

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Submit Review
  const submitHandler = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    // Check login
    if (!user || !token) {
      alert("Please login to submit a review.");
      navigate("/login");
      return;
    }

    // Check rating
    if (!tourRating) {
      alert("Please select a rating.");
      return;
    }

    // Check review text
    const reviewText = reviewMsgRef.current.value.trim();

    if (!reviewText) {
      alert("Please write your review.");
      return;
    }

    // Use actual MongoDB Tour ID
    const mongoTourId = tour._id;

    if (!mongoTourId) {
      alert("MongoDB Tour ID is missing.");
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/reviews/${mongoTourId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            username: user.username || user.name,
            reviewText,
            rating: tourRating,
            productId: mongoTourId,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Review submission failed"
        );
      }

      alert("Review submitted successfully!");

      reviewMsgRef.current.value = "";
      setTourRating(null);

      // Refresh tour details and reviews
      window.location.reload();
    } catch (error) {
      console.error("Review submission error:", error);

      alert(error.message || "Failed to submit review.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-zinc-50 py-16 md:mt-20">
      <div className="max-w-[14000px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12">

        {/* Left Section */}
        <div className="flex-1 space-y-8">

          {/* Image */}
          <div className="relative group">
            <img
              src={photo}
              alt={title}
              className="w-full h-[450px] object-cover rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-zinc-700 shadow-md">
              <FaMapMarkerAlt className="inline mr-1 text-pink-500" />
              {city}
            </div>
          </div>

          {/* Tour Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
            <h1 className="text-4xl font-bold text-zinc-800 mb-4">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-600 mb-4">
              <span className="flex items-center gap-1 text-yellow-500 font-medium">
                <FaStar />
                {avgRating === 0 ? "Not rated" : avgRating}

                <span className="text-zinc-500">
                  ({totalRating} reviews)
                </span>
              </span>

              <span className="flex items-center gap-1 text-teal-500 font-medium">
                <PiMapPinSimpleFill />
                {address}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-zinc-700">
              <span className="flex items-center gap-1">
                <PiCurrencyDollarSimpleBold className="text-green-600" />
                <span className="font-semibold">${price}</span> /person
              </span>

              <span className="flex items-center gap-1">
                <RiPinDistanceFill className="text-blue-600" />
                {distance} km
              </span>

              <span className="flex items-center gap-1">
                <PiUsersThreeFill className="text-pink-600" />
                {maxGroupSize} people
              </span>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-zinc-800 mb-2">
                Description
              </h2>

              <p className="text-zinc-600 leading-relaxed">
                {desc}
              </p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-800">
              Reviews ({reviews.length})
            </h2>

            {/* Rating Input */}
            <form onSubmit={submitHandler} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => setTourRating(num)}
                    className={`cursor-pointer text-xl flex items-center gap-1 transition-all ${
                      tourRating === num
                        ? "text-yellow-500 scale-110"
                        : "text-zinc-400 hover:text-yellow-400"
                    }`}
                  >
                    {num} <IoStar />
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full">
                <input
                  type="text"
                  ref={reviewMsgRef}
                  placeholder="Share your experience..."
                  className="flex-1 min-w-0 border border-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm w-full"
                />

                <button
                  type="submit"
                  className="bg-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-pink-600 transition-all shadow-sm w-full sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Review List */}
            <div className="space-y-5">
              {reviews.map((review, index) => (
                <div
                  key={review._id || index}
                  className="flex gap-4 bg-zinc-50 p-5 rounded-xl border border-zinc-100 hover:shadow-md transition-all"
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-zinc-800">
                        {review.username || review.name || "User"}
                      </h3>

                      <p className="text-sm text-zinc-500">
                        {review.createdAt
                          ? new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              options
                            )
                          : ""}
                      </p>
                    </div>

                    <div className="flex items-center text-yellow-500 mb-1">
                      {[...Array(Number(review.rating) || 0)].map((_, i) => (
                        <IoStar key={i} />
                      ))}
                    </div>

                    <p className="text-zinc-700 italic flex items-start gap-1">
                      <FaQuoteLeft className="text-pink-500 mt-1" />

                      <span>
                        {review.reviewText || review.review || ""}
                      </span>

                      <FaQuoteRight className="text-pink-500 mt-1" />
                    </p>
                  </div>
                </div>
              ))}

              {reviews.length === 0 && (
                <p className="text-zinc-500">
                  No reviews yet. Be the first to review this tour!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Booking Card */}
        <div className="w-full lg:w-[380px]">
          <div className="sticky top-24">
            <Booking tour={tour} avgRating={avgRating} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
