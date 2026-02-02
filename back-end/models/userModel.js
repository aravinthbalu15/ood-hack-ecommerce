// models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      select: false // 🔐 VERY IMPORTANT
    },

    image: {
      url: {
        type: String,
        required: true
      },
      public_id: {
        type: String,
        required: true
      }
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
