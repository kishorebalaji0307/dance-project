require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Configure Cloudinary
if (process.env.CLOUDINARY_URL) {
  cloudinary.config(true);
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? process.env.CLOUDINARY_CLOUD_NAME.trim() : "",
    api_key: process.env.CLOUDINARY_API_KEY ? process.env.CLOUDINARY_API_KEY.trim() : "",
    api_secret: process.env.CLOUDINARY_API_SECRET ? process.env.CLOUDINARY_API_SECRET.trim() : "",
  });
}

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "5678-dance-studio/events",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 1200, height: 1600, crop: "limit", quality: "auto" }],
  },
});

// Multer upload middleware
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, JPEG, PNG, and WEBP images are allowed"), false);
    }
  },
});

// Wrapper middleware to provide descriptive error messages on upload failure
const handlePosterUpload = (req, res, next) => {
  // Pre-check if Cloudinary configuration is missing
  const hasCloudinaryUrl = Boolean(process.env.CLOUDINARY_URL);
  const hasIndividualVars = Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET &&
    process.env.CLOUDINARY_CLOUD_NAME !== "your_cloud_name"
  );

  if (!hasCloudinaryUrl && !hasIndividualVars) {
    return res.status(400).json({
      success: false,
      message:
        "Missing Cloudinary configuration: Please set valid CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in server/.env.",
    });
  }

  upload.single("poster")(req, res, (err) => {
    if (err) {
      console.error("Poster upload error:", err.message || err);

      // Multer size or limit error
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            success: false,
            message: "File size exceeded: Poster image must be under 5MB.",
          });
        }
        return res.status(400).json({
          success: false,
          message: `Upload error: ${err.message}`,
        });
      }

      const msg = err.message || "";

      // File type rejection from fileFilter
      if (msg.includes("Only JPG, JPEG, PNG, and WEBP images are allowed")) {
        return res.status(400).json({
          success: false,
          message: "Invalid file type: Only JPG, JPEG, PNG, and WEBP images are allowed.",
        });
      }

      // Cloud Name invalid or mismatch
      if (
        msg.includes("Invalid cloud_name") ||
        msg.includes("cloud_name mismatch") ||
        (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_CLOUD_NAME.includes(" "))
      ) {
        return res.status(400).json({
          success: false,
          message: `Invalid Cloudinary credentials: Cloud Name "${process.env.CLOUDINARY_CLOUD_NAME}" is invalid or does not match your account. Please check your Cloud Name in https://console.cloudinary.com/pm (Cloud names cannot have spaces).`,
        });
      }

      // API Key invalid
      if (msg.includes("Unknown API key") || msg.includes("Must supply api_key")) {
        return res.status(400).json({
          success: false,
          message: "Invalid Cloudinary credentials: The provided CLOUDINARY_API_KEY is not recognized. Please check server/.env.",
        });
      }

      // API Secret invalid / signature error
      if (msg.includes("Invalid Signature") || msg.includes("signature mismatch") || msg.includes("Must supply api_secret")) {
        return res.status(400).json({
          success: false,
          message: "Invalid Cloudinary credentials: The provided CLOUDINARY_API_SECRET is invalid. Please check server/.env.",
        });
      }

      // General Cloudinary failure
      return res.status(400).json({
        success: false,
        message: `Cloudinary upload failure: ${msg || "Failed to upload image to Cloudinary."}`,
      });
    }
    next();
  });
};

module.exports = { cloudinary, upload, handlePosterUpload };

