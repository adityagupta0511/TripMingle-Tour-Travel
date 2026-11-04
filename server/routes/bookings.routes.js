const express = require("express");
const router = express.Router();
const { createBooking, getAllBookings, getBooking } = require("../controllers/bookingController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// CREATE Booking (only logged-in user)
router.post("/", verifyUser, createBooking);

// GET ALL BOOKINGS (only admin can see all bookings)
router.get("/", verifyAdmin, getAllBookings);

// GET SINGLE BOOKING BY ID (logged-in user can see their own booking)
router.get("/:id", verifyUser, getBooking);

module.exports = router;
