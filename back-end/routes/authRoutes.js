import express from "express"
import passport from "passport"
import jwt from "jsonwebtoken"
import { signup, login } from "../controllers/authController.js"
import upload from "../middleware/uploadMiddleware.js"

const router = express.Router()

// ---------------- LOCAL AUTH ----------------
router.post("/signup", upload.single("image"), signup)
router.post("/login", login)

// ---------------- GOOGLE AUTH ----------------
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const user = req.user

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

 res.redirect(
  `${process.env.FRONTEND_URL}/oauth-success?token=${token}&role=${user.role}`
)


  }
)

// ---------------- FACEBOOK AUTH ----------------
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
)

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const user = req.user

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.redirect(
      `http://localhost:5173/oauth-success?token=${token}&role=${user.role}`
    )
  }
)

export default router
