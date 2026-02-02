import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { createSomething } from "../controllers/adminController.js";

const router = express.Router();

router.post("/create", protect, isAdmin, createSomething);

export default router;
