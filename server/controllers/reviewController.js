
const Review = require("../models/Review");
const Tour = require("../models/Tour");
const User = require("../models/User");

const createReview = async (req, res) => {
  try {
    const { tourId } = req.params;
    const { reviewText, rating } = req.body;

    // Validate review text
    if (!reviewText || !reviewText.trim()) {
      return res.status(400).json({
        success: false,
        message: "Review text is required",
      });
    }

    // Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    // Check if tour exists
    const tour = await Tour.findById(tourId);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // Get logged-in user from MongoDB
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated. Please login again.",
      });
    }

    // Find user by MongoDB ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please login again.",
      });
    }

    // Get user's actual name
    const username =
      user.name ||
      user.username ||
      user.fullName;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "User name is missing in the database.",
      });
    }

    // Create review with user's name
    const newReview = new Review({
      productId: tourId,
      username,
      reviewText: reviewText.trim(),
      rating,
    });

    const savedReview = await newReview.save();

    // Link review with tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    // Send response
    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (error) {
    console.error("Error while submitting review:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: error.message,
    });
  }
};


const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error("Error while fetching reviews:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};


const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
      data: review,
    });
  } catch (error) {
    console.error("Error while fetching review:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch review",
      error: error.message,
    });
  }
};


const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    // Remove reference from Tour model
    await Tour.updateMany({}, {
      $pull: { reviews: deletedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      data: deletedReview,
    });
  } catch (error) {
    console.error("Error while deleting review:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete review",
      error: error.message,
    });
  }
};


// Export controller functions
module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  deleteReview,
};
