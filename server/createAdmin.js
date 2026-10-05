/**
 * createAdmin.js — One-time script to create an admin user for 5678 Dance Studio.
 *
 * Usage:
 *   node createAdmin.js
 *
 * This will create an admin user with the credentials specified below.
 * Run this ONCE from the /server directory:
 *   cd server
 *   node createAdmin.js
 */

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

// ── Configure your admin credentials here ──────────────────────
const ADMIN_USERNAME = "admin";
const ADMIN_EMAIL = "admin@5678studio.com";
const ADMIN_PASSWORD = "Admin@5678!"; // Change this to a strong password!
// ───────────────────────────────────────────────────────────────

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const existing = await User.findOne({ email: ADMIN_EMAIL });
    if (existing) {
      if (existing.role !== "admin") {
        existing.role = "admin";
        await existing.save();
        console.log(`✅ Existing user "${ADMIN_EMAIL}" upgraded to admin role.`);
      } else {
        console.log(`ℹ️  Admin user "${ADMIN_EMAIL}" already exists.`);
      }
      await mongoose.disconnect();
      return;
    }

    // Create new admin user
    const admin = await User.create({
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD, // Pre-save hook will hash this
      role: "admin",
    });

    console.log("🎉 Admin user created successfully!");
    console.log(`   Username: ${admin.username}`);
    console.log(`   Email:    ${admin.email}`);
    console.log(`   Role:     ${admin.role}`);
    console.log("\n⚠️  IMPORTANT: Change the password in createAdmin.js before running in production.");

    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
}

createAdmin();
