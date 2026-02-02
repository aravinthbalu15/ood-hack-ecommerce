import express from "express";
import { signup, login } from "../controllers/authController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/signup", upload.single("image"), signup);
router.post("/login", login);

export default router;
