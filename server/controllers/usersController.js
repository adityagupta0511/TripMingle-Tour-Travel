const User = require("../models/User");

// Create User
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User successfully created",
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.error("Error while creating user:", error);
    res.status(500).json({
      message: "Failed to create user",
      success: false,
      error: error.message,
    });
  }
};

// Read All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "All users fetched successfully",
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Error while fetching users:", error);
    res.status(500).json({
      message: "Failed to fetch users",
      success: false,
      error: error.message,
    });
  }
};

// Read Single User by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error while fetching user:", error);
    res.status(500).json({
      message: "Failed to fetch user",
      success: false,
      error: error.message,
    });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error while updating user:", error);
    res.status(500).json({
      message: "Failed to update user",
      success: false,
      error: error.message,
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      success: true,
      data: deletedUser,
    });
  } catch (error) {
    console.error("Error while deleting user:", error);
    res.status(500).json({
      message: "Failed to delete user",
      success: false,
      error: error.message,
    });
  }
};

// Export all functions
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
