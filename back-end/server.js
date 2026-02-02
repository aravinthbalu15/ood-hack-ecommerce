import "dotenv/config"; // 🔥 MUST be first (ESM safe)


import express from "express";
import cors from "cors";
import DB from "./config/db.js";

// routes (AFTER dotenv)
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

DB();

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
