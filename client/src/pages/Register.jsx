import React, { useState } from "react";
import registerImg from "../assets/register.png";
import userImg from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check password and confirm password
    if (credentials.password !== credentials.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: credentials.fullName,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed.");
        return;
      }

      setMessage("Registration successful! Redirecting to login...");

      // Navigate to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Unable to connect to server. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center py-16 px-6">
      {/* Outer Card */}
      <div className="max-w-[1000px] w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 mt-20">
        {/* Left Illustration */}
        <div className="hidden md:flex w-1/2 justify-center items-center bg-gradient-to-b from-pink-200 to-pink-300">
          <img
            src={registerImg}
            alt="Register Illustration"
            className="w-[80%] max-w-[380px] object-contain drop-shadow-sm"
          />
        </div>

        {/* Right Register Form */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col items-center justify-center">
          {/* User Icon */}
          <div className="bg-pink-100 p-3 rounded-full shadow-md mb-5">
            <img
              src={userImg}
              alt="User Icon"
              className="w-12 h-12 object-contain"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[340px] flex flex-col gap-4"
          >
            <input
              type="text"
              id="fullName"
              placeholder="Enter your Full Name"
              value={credentials.fullName}
              onChange={handleChange}
              required
              className="p-3.5 rounded-lg border border-zinc-300 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white"
            />

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="p-3.5 rounded-lg border border-zinc-300 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white"
            />

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="p-3.5 rounded-lg border border-zinc-300 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white"
            />

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={credentials.confirmPassword}
              onChange={handleChange}
              required
              className="p-3.5 rounded-lg border border-zinc-300 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white"
            />

            {message && (
              <p className="text-sm text-center text-pink-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <p className="text-md mt-5 text-zinc-600">
            Already have an account ?
            <Link
              to="/login"
              className="ml-1 font-semibold text-pink-600 hover:text-pink-700 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
