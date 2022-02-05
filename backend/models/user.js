const mongoose = require("mongoose");
const { Schema, Model } = mongoose;
const { isEmail } = require("validator");

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "name required"] },
    userName: {
      type: String,
      unique: [true, "Username already exists"],
      required: [true, "username required"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      validate: {
        validator: isEmail,
        message: "{VALUE} is not a valid email",
        isAsync: false,
      },
      required: [true, "email required"],
    },
    dob: {
      type: Date,
      required: [true, "enter date of birth"],
    },
    bio: {
      type: String,
      max: [100, "Character limit of bio exceeded"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
      min: [6, "Minimum length of password is 6 digits"],
    },
    profilePicture: {
      type: String,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    following: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: { createdAt: true } }
);

module.exports = new Model("users", userSchema);
