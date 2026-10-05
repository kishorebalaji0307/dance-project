const express = require("express");
const {
  getPublicEvents,
  getAllEventsAdmin,
  getEventByIdAdmin,
  createEvent,
  updateEvent,
  publishEvent,
  unpublishEvent,
  deleteEvent,
} = require("../controllers/eventController");
const { adminProtect } = require("../middleware/adminAuth");
const { handlePosterUpload } = require("../config/cloudinary");

const router = express.Router();

// ─────────────────────────────────────────────
// PUBLIC — no auth required
// ─────────────────────────────────────────────
router.get("/public", getPublicEvents);

// ─────────────────────────────────────────────
// ADMIN — requires admin authentication
// ─────────────────────────────────────────────
router.get("/admin", adminProtect, getAllEventsAdmin);
router.get("/admin/:id", adminProtect, getEventByIdAdmin);
router.post("/admin", adminProtect, handlePosterUpload, createEvent);
router.put("/admin/:id", adminProtect, handlePosterUpload, updateEvent);
router.patch("/admin/:id/publish", adminProtect, publishEvent);
router.patch("/admin/:id/unpublish", adminProtect, unpublishEvent);
router.delete("/admin/:id", adminProtect, deleteEvent);

module.exports = router;
