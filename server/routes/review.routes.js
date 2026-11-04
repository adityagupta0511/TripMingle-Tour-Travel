const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { verifyUser } = require("../utils/verifyToken");

// CREATE Review (Only logged-in user can create)
router.post("/:tourId", verifyUser, reviewController.createReview);

// READ ALL Reviews (Public)
router.get("/", reviewController.getAllReviews);

// READ Single Review by ID (Public)
router.get("/:id", reviewController.getReviewById);

// DELETE Review by ID (Only logged-in user can delete)
router.delete("/:id", verifyUser, reviewController.deleteReview);

module.exports = router;
