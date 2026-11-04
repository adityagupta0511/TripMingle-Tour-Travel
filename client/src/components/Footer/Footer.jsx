import React from "react";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiPinterestLine,
  RiGithubLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 pt-12 pb-6 text-zinc-700">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===== Left Section (Logo & About) ===== */}
        <div className="md:pl-10">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-zinc-800">
            Trip<span className="text-pink-500">Mingle</span>
          </Link>
          <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
            Life’s too short for ordinary trips. With TripMingle, turn your
            travel dreams into stories that spark every conversation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="text-zinc-600 hover:text-pink-500 text-2xl">
              <RiInstagramLine />
            </a>
            <a href="#" className="text-zinc-600 hover:text-pink-500 text-2xl">
              <RiPinterestLine />
            </a>
            <a href="#" className="text-zinc-600 hover:text-pink-500 text-2xl">
              <RiFacebookCircleLine />
            </a>
            <a href="#" className="text-zinc-600 hover:text-pink-500 text-2xl">
              <RiGithubLine />
            </a>
          </div>
        </div>

        {/* ===== Discover Links ===== */}
        <div className="md:pl-20">
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">Discover</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/home" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-pink-500">
                Tours
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="md:pl-10">
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/gallery" className="hover:text-pink-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-pink-500">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-pink-500">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact Section ===== */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <RiMapPinLine className="text-pink-500 text-xl" />
              <span>Paniyara, Gorakhpur</span>
            </li>
            <li className="flex items-center gap-2">
              <RiMailLine className="text-pink-500 text-xl" />
              <a
                href="mailto:dev.muhib01@gmail.com"
                className="hover:text-pink-500"
              >
                guptaadityaiit@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <RiPhoneLine className="text-pink-500 text-xl" />
              <a href="tel:+0123456789" className="hover:text-pink-500">
                +888844442222
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="border-t border-zinc-300 mt-10 pt-4 text-center text-sm text-zinc-500">
        Copyright © 2025, Designed and Developed by{" "}
        <span className="text-pink-500 font-semibold">Aditya Gupta</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
