const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

// CREATE (only Admins can create new users)
router.post("/", verifyAdmin, createUser);

// READ ALL (only Admins can see all users)
router.get("/", verifyAdmin, getAllUsers);

// READ BY ID (only that user or admin can access)
router.get("/:id", verifyUser, getUserById);

// UPDATE (only that user or admin can update)
router.put("/:id", verifyUser, updateUser);

// DELETE (only Admin can delete)
router.delete("/:id", verifyAdmin, deleteUser);

module.exports = router;  
