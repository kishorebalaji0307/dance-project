const express = require("express");
const { register, login, logout, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const { loginRateLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/register", register);
router.post("/login", loginRateLimiter, login); // Rate limit only the login endpoint
router.post("/logout", logout);
router.get("/me", protect, getMe);

module.exports = router;
