const Tour = require("../models/Tour");
const mongoose = require("mongoose");

// Create Tour
const createData = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const savedTour = await newTour.save();

    res.status(201).json({
      message: "Tour successfully created",
      success: true,
      data: savedTour,
    });
  } catch (error) {
    console.error("Error while creating tour:", error);

    res.status(500).json({
      message: "Failed to create. Try again",
      success: false,
      error: error.message,
    });
  }
};

// Read All Tours (with reviews)
const getAllData = async (req, res) => {
  try {
    const tours = await Tour.find().populate("reviews");

    res.status(200).json({
      message: "All tours fetched successfully",
      success: true,
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    console.error("Error while fetching tours:", error);

    res.status(500).json({
      message: "Failed to fetch data",
      success: false,
      error: error.message,
    });
  }
};

// Read Single Tour by MongoDB ID
const getDataById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid tour ID",
      });
    }

    // Find tour and populate reviews
    const tour = await Tour.findById(id).populate("reviews");

    // Check if tour exists
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });

  } catch (error) {
    console.error("Error fetching tour by ID:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch tour",
      error: error.message,
    });
  }
};

// Update Tour
const updateData = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTour) {
      return res.status(404).json({
        message: "Tour not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Tour updated successfully",
      success: true,
      data: updatedTour,
    });
  } catch (error) {
    console.error("Error while updating tour:", error);

    res.status(500).json({
      message: "Failed to update tour",
      success: false,
      error: error.message,
    });
  }
};

// Delete Tour
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return res.status(404).json({
        message: "Tour not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Tour deleted successfully",
      success: true,
      data: deletedTour,
    });
  } catch (error) {
    console.error("Error while deleting tour:", error);

    res.status(500).json({
      message: "Failed to delete tour",
      success: false,
      error: error.message,
    });
  }
};

// Search Tours by destination, city, country or title
const getTourBySearch = async (req, res) => {
  try {
    const { search } = req.query;

    // Validate search query
    if (!search || !search.trim()) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    // Case-insensitive partial search
    const searchRegex = new RegExp(search.trim(), "i");

    // Search tours by city, country/address or title
    const tours = await Tour.find({
      $or: [
        { city: searchRegex },
        { address: searchRegex },
        { title: searchRegex },
      ],
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Tours fetched successfully",
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    console.error("Error while searching tours:", error);

    res.status(500).json({
      success: false,
      message: "Failed to search tours",
      error: error.message,
    });
  }
};

// Get Featured Tours
const getFeaturedTour = async (req, res) => {
  try {
    const featuredTours = await Tour.find({ featured: true })
      .limit(8)
      .populate("reviews");

    res.status(200).json({
      success: true,
      message: "Featured tours fetched successfully",
      count: featuredTours.length,
      data: featuredTours,
    });
  } catch (error) {
    console.error("Error while fetching featured tours:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured tours",
      error: error.message,
    });
  }
};

// Get Total Tour Count
const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      message: "Total tour count fetched successfully",
      data: tourCount,
    });
  } catch (error) {
    console.error("Error while counting tours:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch tour count",
      error: error.message,
    });
  }
};

// Export all functions
module.exports = {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
};