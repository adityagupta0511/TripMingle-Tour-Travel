import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaRegSmileBeam,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="pt-[18vh] pb-20 bg-zinc-50">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-pink-500 mb-3">
              About TripMingle
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-snug">
              Travel planning that feels
              <span className="text-pink-500"> simple and clear.</span>
            </h1>
            <p className="text-zinc-600 leading-relaxed mb-3">
              TripMingle is a tour-based travel website where you can find
              organised trips, see all important details in one place, and book
              without confusion. No cluttered pages, no random popups — just a
              clean flow from{" "}
              <span className="font-semibold">idea → tour → booking.</span>
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Whether you want a quick weekend escape or a longer vacation,
              TripMingle helps you focus on the fun part of travelling, not the
              stressful planning.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/tours"
                className="inline-block bg-gradient-to-b from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:scale-105 hover:to-pink-600 transition-all duration-300"
              >
                Browse tours
              </Link>
              <span className="text-xs md:text-sm text-zinc-500">
                Explore trips. Pick one. Book in a few steps.
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 via-white to-pink-100/40 blur-3xl -z-10" />
            <div className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,.06)] p-6 md:p-7 border border-pink-50">
              <h2 className="text-lg md:text-xl font-semibold text-zinc-900 mb-3">
                What TripMingle focuses on
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                The idea behind TripMingle is very straightforward:{" "}
                <span className="font-semibold">
                  show the right information, in the right order, with zero
                  drama.
                </span>{" "}
                From the home page to the booking form, everything is designed
                to feel calm and easy to follow.
              </p>

              <ul className="space-y-3 text-sm text-zinc-600">
                <li className="flex gap-2">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-pink-500" />
                  Clear tour cards with destination, price, and short
                  description.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-pink-500" />
                  A dedicated tour details page before you decide to book.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-pink-500" />
                  A focused booking section where you just enter what is needed.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 CARDS – WHAT YOU CAN DO */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
              What you can do with TripMingle
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Instead of hunting for trips in multiple tabs, TripMingle puts
              everything in a simple flow. You don’t need to guess what to do
              next — the UI guides you step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-[0_16px_35px_rgba(0,0,0,.04)] border border-zinc-100">
              <div className="h-11 w-11 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-pink-500 text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-900 mb-2">
                Discover curated trips
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Explore tours with clear destination info, short overviews, and
                prices that you can quickly compare.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-[0_16px_35px_rgba(0,0,0,.04)] border border-zinc-100">
              <div className="h-11 w-11 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
                <FaCalendarAlt className="text-pink-500 text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-900 mb-2">
                Understand the plan
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Each tour has its own detail page with more information so you
                know what kind of trip you’re actually booking.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-[0_16px_35px_rgba(0,0,0,.04)] border border-zinc-100">
              <div className="h-11 w-11 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
                <FaUserFriends className="text-pink-500 text-xl" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-900 mb-2">
                Book for you and your people
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Use the booking section to reserve your spot. It’s built to be
                clear enough for anyone in your family or friend circle.
              </p>
            </div>
          </div>
        </div>

        {/* HOW IT FEELS / PHILOSOPHY */}
        <div className="bg-white rounded-3xl px-6 py-8 md:px-10 md:py-10 border border-zinc-100 shadow-[0_18px_45px_rgba(0,0,0,.03)] mb-16">
          <div className="grid md:grid-cols-[1.4fr,1fr] gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                The experience we’re trying to create
              </h2>
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed mb-3">
                TripMingle is not about flashy graphics or fake promises. It’s
                about giving you a page where you{" "}
                <span className="font-semibold">
                  instantly understand what’s going on.
                </span>{" "}
                Where each button has a clear purpose, and each section has a
                reason to exist.
              </p>
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed mb-3">
                From the header navigation to the booking confirmation, the goal
                is to remove unnecessary noise and keep only what actually helps
                you travel.
              </p>
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                In short, it’s a{" "}
                <span className="font-semibold">
                  calm, structured travel experience
                </span>{" "}
                on screen — so that your real trip can be the exciting part.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5 md:p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">What we care about</h3>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li className="flex items-start gap-2">
                  <span className="mt-[4px] h-1.5 w-1.5 rounded-full bg-pink-400" />
                  <span>
                    <span className="font-semibold">Clarity</span> – every page
                    should answer “What do I do next?” without guessing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[4px] h-1.5 w-1.5 rounded-full bg-pink-400" />
                  <span>
                    <span className="font-semibold">Comfort</span> – soft
                    colors, readable fonts, and enough spacing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[4px] h-1.5 w-1.5 rounded-full bg-pink-400" />
                  <span>
                    <span className="font-semibold">Flow</span> – Home → Tours →
                    Tour Details → Booking → Thank You should feel natural.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
            Want to see how it actually works?
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto mb-6">
            Open the Tours page, pick any trip, and walk through the full
            journey like a real user — from discovering the tour to finishing
            the booking.
          </p>
          <Link
            to="/tours"
            className="inline-block bg-gradient-to-b from-pink-400 to-pink-500 text-white px-10 py-3 rounded-full text-md font-semibold shadow-md hover:scale-105 hover:to-pink-600 transition-all duration-300"
          >
            Start exploring
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
