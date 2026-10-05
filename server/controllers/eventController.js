const Event = require("../models/Event");
const { cloudinary } = require("../config/cloudinary");

// ─────────────────────────────────────────────
// PUBLIC ROUTES
// ─────────────────────────────────────────────

/**
 * @desc    Get upcoming published events (public)
 * @route   GET /api/events/public
 * @access  Public
 */
exports.getPublicEvents = async (req, res) => {
  try {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    // Fetch published events whose eventDate has not yet passed (including today), sorted nearest first
    const events = await Event.find({
      status: "published",
      eventDate: { $gte: startOfToday },
    })
      .sort({ eventDate: 1 })
      .select("title description eventDate eventTime venue registrationUrl poster updatedAt")
      .lean();

    return res.status(200).json({ success: true, events });
  } catch (error) {
    console.error("getPublicEvents error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch events." });
  }
};

// ─────────────────────────────────────────────
// ADMIN ROUTES (require adminProtect)
// ─────────────────────────────────────────────

/**
 * @desc    Get all events (admin)
 * @route   GET /api/events/admin
 * @access  Admin
 */
exports.getAllEventsAdmin = async (req, res) => {
  try {
    const events = await Event.find()
      .sort({ createdAt: -1 })
      .populate("createdBy", "username email")
      .lean();
    return res.status(200).json({ success: true, events });
  } catch (error) {
    console.error("getAllEventsAdmin error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch events." });
  }
};

/**
 * @desc    Get single event by ID (admin)
 * @route   GET /api/events/admin/:id
 * @access  Admin
 */
exports.getEventByIdAdmin = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("createdBy", "username email").lean();
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }
    return res.status(200).json({ success: true, event });
  } catch (error) {
    console.error("getEventByIdAdmin error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch event." });
  }
};

/**
 * @desc    Create a new event
 * @route   POST /api/events/admin
 * @access  Admin
 */
exports.createEvent = async (req, res) => {
  try {
    const { title, description, eventDate, eventTime, venue, registrationUrl, status } = req.body;

    // Validate required fields
    if (!title || !eventDate || !eventTime || !venue) {
      // If a file was uploaded but validation fails, delete from Cloudinary
      if (req.file && req.file.filename) {
        await cloudinary.uploader.destroy(req.file.filename).catch(() => {});
      }
      return res.status(400).json({ success: false, message: "Title, event date, event time, and venue are required." });
    }

    // Validate date
    const parsedDate = new Date(eventDate);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ success: false, message: "Invalid event date." });
    }

    // Set status to published by default
    const allowedStatuses = ["draft", "published", "unpublished"];
    const eventStatus = allowedStatuses.includes(status) ? status : "published";

    // Build poster object
    const poster = {};
    if (req.file) {
      poster.url = req.file.path;
      poster.publicId = req.file.filename;
    }

    // Require poster image for event
    if (!poster.url) {
      return res.status(400).json({
        success: false,
        message: "An event poster image is required. Please upload a poster.",
      });
    }

    const event = await Event.create({
      title: title.trim(),
      description: description ? description.trim() : "",
      eventDate: parsedDate,
      eventTime: eventTime.trim(),
      venue: venue.trim(),
      registrationUrl: registrationUrl ? registrationUrl.trim() : "",
      poster,
      status: eventStatus,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully.",
      event,
      posterUrl: poster.url || null,
    });
  } catch (error) {
    console.error("createEvent error:", error);
    return res.status(500).json({ success: false, message: "Failed to create event." });
  }
};

/**
 * @desc    Update an event
 * @route   PUT /api/events/admin/:id
 * @access  Admin
 */
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      if (req.file && req.file.filename) {
        await cloudinary.uploader.destroy(req.file.filename).catch(() => {});
      }
      return res.status(404).json({ success: false, message: "Event not found." });
    }

    const { title, description, eventDate, eventTime, venue, registrationUrl, status } = req.body;

    // Update fields if provided
    if (title !== undefined) event.title = title.trim();
    if (description !== undefined) event.description = description.trim();
    if (eventDate !== undefined) {
      const parsedDate = new Date(eventDate);
      if (!isNaN(parsedDate.getTime())) event.eventDate = parsedDate;
    }
    if (eventTime !== undefined) event.eventTime = eventTime.trim();
    if (venue !== undefined) event.venue = venue.trim();
    if (registrationUrl !== undefined) event.registrationUrl = registrationUrl.trim();

    // Handle poster replacement
    if (req.file) {
      // Delete old poster from Cloudinary if it exists
      if (event.poster && event.poster.publicId) {
        await cloudinary.uploader.destroy(event.poster.publicId).catch((err) =>
          console.warn("Could not delete old poster from Cloudinary:", err.message)
        );
      }
      event.poster = {
        url: req.file.path,
        publicId: req.file.filename,
      };
    }

    const allowedStatuses = ["draft", "published", "unpublished"];
    if (status !== undefined && allowedStatuses.includes(status)) {
      // Prevent publishing without a poster
      if (status === "published" && (!event.poster || !event.poster.url)) {
        return res.status(400).json({
          success: false,
          message: "An event cannot be published without a poster image. Please upload a poster or save as draft.",
        });
      }
      event.status = status;
    }

    await event.save();

    return res.status(200).json({
      success: true,
      message: "Event updated successfully.",
      event,
      posterUrl: event.poster?.url || null,
    });
  } catch (error) {
    console.error("updateEvent error:", error);
    return res.status(500).json({ success: false, message: "Failed to update event." });
  }
};

/**
 * @desc    Publish an event
 * @route   PATCH /api/events/admin/:id/publish
 * @access  Admin
 */
exports.publishEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: "Event not found." });

    if (!event.poster || !event.poster.url) {
      return res.status(400).json({
        success: false,
        message: "Cannot publish: This event has no poster image. Please edit the event and upload a poster first.",
      });
    }

    event.status = "published";
    await event.save();

    return res.status(200).json({
      success: true,
      message: "Event published.",
      event,
      posterUrl: event.poster.url,
    });
  } catch (error) {
    console.error("publishEvent error:", error);
    return res.status(500).json({ success: false, message: "Failed to publish event." });
  }
};

/**
 * @desc    Unpublish an event
 * @route   PATCH /api/events/admin/:id/unpublish
 * @access  Admin
 */
exports.unpublishEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: "unpublished" },
      { new: true }
    );
    if (!event) return res.status(404).json({ success: false, message: "Event not found." });
    return res.status(200).json({ success: true, message: "Event unpublished.", event });
  } catch (error) {
    console.error("unpublishEvent error:", error);
    return res.status(500).json({ success: false, message: "Failed to unpublish event." });
  }
};

/**
 * @desc    Delete an event
 * @route   DELETE /api/events/admin/:id
 * @access  Admin
 */
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: "Event not found." });

    // Delete poster from Cloudinary
    if (event.poster && event.poster.publicId) {
      await cloudinary.uploader.destroy(event.poster.publicId).catch((err) =>
        console.warn("Could not delete poster from Cloudinary:", err.message)
      );
    }

    await event.deleteOne();

    return res.status(200).json({ success: true, message: "Event deleted successfully." });
  } catch (error) {
    console.error("deleteEvent error:", error);
    return res.status(500).json({ success: false, message: "Failed to delete event." });
  }
};
