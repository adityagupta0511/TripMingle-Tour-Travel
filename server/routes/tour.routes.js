const express = require("express");
const router = express.Router();

const tourController = require("../controllers/tourController");
const { verifyAdmin } = require("../utils/verifyToken");

// CREATE TOUR (Admin only)
router.post("/", verifyAdmin, tourController.createData);

// GET ALL TOURS
router.get("/", tourController.getAllData);

// GET FEATURED TOURS
router.get("/featured/tour", tourController.getFeaturedTour);

// GET TOUR COUNT (Admin only)
router.get("/count/tour", verifyAdmin, tourController.getTourCount);

// SEARCH TOURS
router.get("/search/tour", tourController.getTourBySearch);

// GET TOUR BY ID
router.get("/:id", tourController.getDataById);

// UPDATE TOUR (Admin only)
router.put("/:id", verifyAdmin, tourController.updateData);

// DELETE TOUR (Admin only)
router.delete("/:id", verifyAdmin, tourController.deleteData);

module.exports = router;