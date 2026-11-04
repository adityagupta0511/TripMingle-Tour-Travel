import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ThankYou = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center p-8 bg-white rounded-3xl shadow-xl max-w-md w-full border border-pink-100">
        <IoCheckmarkCircleOutline className="text-green-500 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-zinc-800 mb-2">Thank You!</h1>
        <p className="text-zinc-600 mb-6">
          Your tour has been successfully booked.
        </p>

        <Link
          to="/home"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-pink-600 transition-all shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
