import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TbMenu2, TbMenu3, TbSearch } from "react-icons/tb";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Check login status and listen for login/logout changes
  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error reading user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    updateUser();

    window.addEventListener("authChange", updateUser);

    return () => {
      window.removeEventListener("authChange", updateUser);
    };
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();

    const search = searchTerm.trim();

    if (!search) return;

    setShowMenu(false);

    navigate(`/tours/search?search=${encodeURIComponent(search)}`);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("authChange"));

    setUser(null);
    setShowMenu(false);

    navigate("/login");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "drop-shadow-[0_4px_20px_rgba(0,0,0,.3)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 min-h-[14vh] flex flex-wrap justify-between items-center gap-4 py-4">
        
        {/* TripMingle Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src="/tripmingle-icon.svg"
            alt="TripMingle Logo"
            className="w-[68px] h-[58px] object-contain"
          />

          <span className="text-3xl font-bold tracking-tight text-zinc-800">
            Trip<span className="text-pink-500">Mingle</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-8">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `font-semibold tracking-wider ${
                  isActive
                    ? "text-pink-500"
                    : "text-zinc-800 hover:text-pink-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-semibold tracking-wider ${
                  isActive
                    ? "text-pink-500"
                    : "text-zinc-800 hover:text-pink-500"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tours"
              className={({ isActive }) =>
                `font-semibold tracking-wider ${
                  isActive
                    ? "text-pink-500"
                    : "text-zinc-800 hover:text-pink-500"
                }`
              }
            >
              Tours
            </NavLink>
          </li>
        </ul>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="order-3 md:order-none w-full md:w-auto flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:border-pink-500"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full md:w-56 px-4 py-2 outline-none text-sm text-zinc-800"
          />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 flex items-center justify-center transition-colors"
            aria-label="Search"
          >
            <TbSearch className="text-xl" />
          </button>
        </form>

        {/* Desktop Login / User Section */}
        <div className="hidden md:flex items-center gap-x-6">
          {user ? (
            <>
              <span className="font-semibold text-zinc-800">
                Welcome, {user.fullName}
              </span>

              <button
                onClick={handleLogout}
                className="bg-gradient-to-b from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full text-md hover:scale-105 hover:to-pink-600 transition-all duration-300 cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-pink-500 font-semibold text-zinc-800"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-gradient-to-b from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full text-md hover:scale-105 hover:to-pink-600 transition-all duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-3xl text-zinc-800 md:hidden hover:text-pink-500"
        >
          {showMenu ? <TbMenu3 /> : <TbMenu2 />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-24 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] bg-pink-300/80 backdrop-blur-xl shadow-lg rounded-2xl flex flex-col items-center gap-8 py-10 transition-all duration-500 ease-in-out z-50 ${
            showMenu ? "opacity-100 visible scale-100" : "opacity-0 invisible"
          }`}
        >
          <li>
            <NavLink
              to="/home"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `font-semibold tracking-wide text-lg ${
                  isActive
                    ? "text-pink-500"
                    : "text-zinc-800 hover:text-pink-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `font-semibold tracking-wide text-lg ${
                  isActive
                    ? "text-pink-500"
                    : "text-zinc-800 hover:text-pink-500"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tours"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `font-semibold tracking-wide text-lg ${
                  isActive
                    ? "text-pink-500"
                    : "text-zinc-800 hover:text-pink-500"
                }`
              }
            >
              Tours
            </NavLink>
          </li>

          {user ? (
            <>
              <li className="font-semibold text-zinc-800 text-lg">
                Welcome, {user.fullName}
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-b from-pink-400 to-pink-500 text-white px-10 py-3 rounded-full text-md font-semibold shadow-md hover:scale-105 hover:to-pink-600 transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={() => setShowMenu(false)}
                  className="font-semibold tracking-wide text-zinc-800 hover:text-pink-500 text-lg"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  onClick={() => setShowMenu(false)}
                  className="bg-gradient-to-b from-pink-400 to-pink-500 text-white px-10 py-3 rounded-full text-md font-semibold shadow-md hover:scale-105 hover:to-pink-600 transition-all duration-300"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;