const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    eventDate: {
      type: Date,
      required: [true, "Event date is required"],
    },
    eventTime: {
      type: String,
      required: [true, "Event time is required"],
      trim: true,
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
      trim: true,
      maxlength: [300, "Venue cannot exceed 300 characters"],
    },
    registrationUrl: {
      type: String,
      trim: true,
      default: "",
    },
    poster: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    status: {
      type: String,
      enum: ["draft", "published", "unpublished"],
      default: "published",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries on published upcoming events
EventSchema.index({ status: 1, eventDate: 1 });

module.exports = mongoose.model("Event", EventSchema);
