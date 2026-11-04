const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// CORS Options
const corsOptions = {
  origin: true,
  credentials: true,
};

// Routers
const tourRouter = require("./routes/tour.routes");
const userRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
const reviewRouter = require("./routes/review.routes");
const bookingRouter = require("./routes/bookings.routes");

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Middleware
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/bookings", bookingRouter);

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running 🚀",
    timestamp: new Date(),
  });
});

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is working 🚀",
  });
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: "error",
    message: err.message,
  });
});

module.exports = app;
