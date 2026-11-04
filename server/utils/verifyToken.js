const jwt = require("jsonwebtoken");

// Verify JWT Token
const verifyToken = (req, res, next) => {
  try {
    // Get token from cookie
    const cookieToken = req.cookies?.accessToken;

    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    const bearerToken =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

    // Prefer cookie token, otherwise use Bearer token
    const token = cookieToken || bearerToken;

    // If token is missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "You're not authorized. Please login.",
      });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Token is invalid or expired. Please login again.",
        });
      }

      req.user = user;
      console.log("Decoded JWT user:", user);
      next();
    });
  } catch (error) {
    console.error("JWT verification error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Verify User
const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    // Allow any logged-in user to submit a review
    next();
  });
};

// Verify Admin
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      return next();
    }

    return res.status(403).json({
      success: false,
      message: "Admin access required.",
    });
  });
};

module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin,
};
