import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate();

  const { price, reviews = [] } = tour;

  const [credentials, setCredentials] = useState({
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceFee = 10;

  const totalAmount =
    Number(price) * Number(credentials.guestSize) + serviceFee;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check whether user is logged in
    const loggedInUser = localStorage.getItem("user");

    // If user is not logged in, show alert and redirect to login
    if (!loggedInUser) {
      alert("Please login first to book this tour!");

      navigate("/login");
      return;
    }

    // If user is logged in, continue booking
    navigate("/thank-you");
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg border border-zinc-200 rounded-3xl shadow-lg p-6 sm:p-8 transition-all hover:shadow-2xl hover:scale-[1.01] w-full max-w-md mx-auto">
      {/* Price + Rating */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-zinc-800 tracking-tight">
          ${price}
          <span className="text-base font-medium text-zinc-500">
            {" "}/person
          </span>
        </h2>

        <div className="flex items-center text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          <FaStar className="mr-1" />

          {avgRating === 0 ? "Not rated" : avgRating}

          <span className="text-zinc-500 ml-1">
            ({reviews.length})
          </span>
        </div>
      </div>

      {/* Booking Form */}
      <div>
        <h3 className="text-lg font-semibold text-zinc-800 mb-4">
          Traveler Information
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            value={credentials.fullName}
            required
            onChange={handleChange}
            className="w-full border border-zinc-200 rounded-xl px-4 py-3 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all shadow-sm"
          />

          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            value={credentials.phone}
            required
            onChange={handleChange}
            className="w-full border border-zinc-200 rounded-xl px-4 py-3 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all shadow-sm"
          />

          {/* Date + Guest inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="date"
              id="bookAt"
              value={credentials.bookAt}
              required
              onChange={handleChange}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all shadow-sm"
            />

            <input
              type="number"
              id="guestSize"
              placeholder="Guests"
              value={credentials.guestSize}
              min="1"
              required
              onChange={handleChange}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all shadow-sm"
            />
          </div>

          {/* Booking Summary */}
          <div className="mt-8 border-t border-zinc-200 pt-4 space-y-3 text-zinc-700 text-sm">
            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                ${price}
                <CgClose className="text-xs" />
                {credentials.guestSize}
                {credentials.guestSize > 1 ? " people" : " person"}
              </span>

              <span>
                ${Number(price) * Number(credentials.guestSize)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Service charge</span>
              <span>${serviceFee}</span>
            </div>

            <div className="flex justify-between font-semibold text-zinc-800 text-base mt-2">
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-pink-500 text-white font-semibold py-3 rounded-xl text-lg shadow-md hover:bg-pink-600 active:scale-[0.98] transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;