import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import cloudinary from "../config/cloudinary.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  
  try {
    const { name, email, password, confirmPassword } = req.body;
    const file = req.file;

    // 1. Validate text fields
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Text fields are required" });
    }

    // 2. Validate file
    if (!file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // 3. Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 4. Normalize email
    const normalizedEmail = email.toLowerCase();

    // 5. Check existing user
    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 6. Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
      { folder: "users" }
    );

    // 7. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 8. Create user
    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      provider: "local",   // 🔥 ADD THIS
      role: "user",
      image: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id
      }
    });

    // 9. Generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "Signup successful",
      token,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User
      .findOne({ email: email.toLowerCase() })
      .select("+password +provider");

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🔥 BLOCK SOCIAL LOGIN USERS
    if (user.provider !== "local") {
      return res.status(400).json({
        message: `Please login using ${user.provider}`
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


