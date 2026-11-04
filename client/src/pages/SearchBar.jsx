import React, { useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineGroupAdd } from "react-icons/md";
import { RiEarthLine, RiTimerLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const destinationRef = useRef("");
  const countryRef = useRef("");
  const tripLenRef = useRef("");
  const maxPeopleRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async (e) => {
    e.preventDefault();

    const destination = destinationRef.current.value.trim();
    const country = countryRef.current.value.trim();
    const tripLen = tripLenRef.current.value;
    const maxPeople = maxPeopleRef.current.value;

    if (!destination || !country || !tripLen || !maxPeople) {
      return alert("All fields are required!");
    }

    try {
      // 🔍 API CALL — update query params as per your backend
      const res = await fetch(
        `${BASE_URL}/tour/search/getTourBySearch?city=${destination}&country=${country}&tripLength=${tripLen}&maxPeople=${maxPeople}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch tour data!");
      }

      const result = await res.json();

      // ✅ Pass result to SearchResultList page via `state`
      navigate(
        `/tours/search?city=${destination}&country=${country}&tripLength=${tripLen}&maxPeople=${maxPeople}`,
        { state: result.data }
      );
    } catch (err) {
      alert("Error fetching tours: " + err.message);
      console.error(err);
    }
  };

  return (
    <section className="w-full flex justify-center mt-6 px-4">
      <form
        onSubmit={searchHandler}
        className="w-full max-w-6xl bg-zinc-100 rounded-2xl flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 p-5 md:p-6 border border-pink-200"
      >
        {/* Destination */}
        <div className="flex items-center gap-3 w-full sm:w-[48%] lg:w-[18%]">
          <span className="text-xl text-pink-500">
            <FiMapPin />
          </span>
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-zinc-800">
              Destination
            </label>
            <input
              type="text"
              placeholder="Where to?"
              className="mt-1 w-full px-4 py-2 bg-white rounded-lg border border-zinc-300 text-sm text-zinc-600 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
              ref={destinationRef}
            />
          </div>
        </div>

        {/* Country / Region */}
        <div className="flex items-center gap-3 w-full sm:w-[48%] lg:w-[18%]">
          <span className="text-xl text-pink-500">
            <RiEarthLine />
          </span>
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-zinc-800">
              Country / Region
            </label>
            <input
              type="text"
              placeholder="e.g. India, Japan"
              className="mt-1 w-full px-4 py-2 bg-white rounded-lg border border-zinc-300 text-sm text-zinc-600 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
              ref={countryRef}
            />
          </div>
        </div>

        {/* Trip Length */}
        <div className="flex items-center gap-3 w-full sm:w-[48%] lg:w-[18%]">
          <span className="text-xl text-pink-500">
            <RiTimerLine />
          </span>
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-zinc-800">
              Trip Length
            </label>
            <select
              className="mt-1 w-full px-4 py-2 rounded-lg border border-zinc-300 text-sm text-zinc-600 bg-white focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
              ref={tripLenRef}
            >
              <option value="">Select</option>
              <option value="1-3">1–3 Days</option>
              <option value="4-7">4–7 Days</option>
              <option value="8-14">8–14 Days</option>
              <option value="15+">15+ Days</option>
            </select>
          </div>
        </div>

        {/* Max People */}
        <div className="flex items-center gap-3 w-full sm:w-[48%] lg:w-[18%]">
          <span className="text-xl text-pink-500">
            <MdOutlineGroupAdd />
          </span>
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-zinc-800">
              Max People
            </label>
            <input
              type="number"
              placeholder="e.g. 4"
              className="mt-1 w-full px-4 py-2 bg-white rounded-lg border border-zinc-300 text-sm text-zinc-600 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
              ref={maxPeopleRef}
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-xl flex justify-center items-center gap-2 transition-all shadow-md cursor-pointer"
        >
          <FaSearch className="text-sm" />
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
