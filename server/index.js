require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const { apiRateLimiter } = require("./middleware/rateLimiter");

// Safe Cloudinary environment check
console.log("Environment configuration check:");
console.log("  CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? "configured" : "missing");
console.log("  CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? "configured" : "missing");
console.log("  CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "configured" : "missing");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB database connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Trust reverse proxy (Render / Cloudflare / Vercel)
app.set("trust proxy", 1);

// Allowed origins
const allowedOrigins = [
  "https://www.5678dancestudio.in",
  "https://5678dancestudio.in",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];

if (process.env.CLIENT_URL) {
  const envOrigins = process.env.CLIENT_URL.split(",").map((o) => o.trim());
  allowedOrigins.push(...envOrigins);
}

const isOriginAllowed = (origin) => {
  // Allow requests with no origin (like mobile apps, curl, or server-to-server requests)
  if (!origin) return true;

  // Check if origin is explicitly in allowedOrigins list
  if (allowedOrigins.includes(origin)) return true;

  // Check if origin matches 5678dancestudio.in or any subdomain
  if (/https?:\/\/(.+\.)?5678dancestudio\.in$/.test(origin)) return true;

  // Check if origin is any Vercel domain (*.vercel.app)
  if (/https?:\/\/(.+\.)?vercel\.app$/.test(origin)) return true;

  // Check if origin is any Render domain (*.onrender.com)
  if (/https?:\/\/(.+\.)?onrender\.com$/.test(origin)) return true;

  // Check if origin is localhost or 127.0.0.1 on any port
  if (/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return true;

  return false;
};

const corsOptions = {
  origin: (origin, callback) => {
    if (isOriginAllowed(origin)) {
      return callback(null, true);
    }
    console.warn(`[CORS] Request blocked from origin: ${origin}`);
    callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const path = require("path");

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", apiRateLimiter, eventRoutes);

// Simple Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running smoothly" });
});

// Serve static client production build if present
const clientDistPath = path.join(__dirname, "../client/dist");
if (require("fs").existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.use((req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Express global error handler:", err.stack);
  res.status(500).json({ success: false, message: "Something went wrong on the server" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
