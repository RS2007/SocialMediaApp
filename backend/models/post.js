const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User required for uploading post"],
    },
    pic: {
      type: String,
    },
    desc: {
      type: String,
      max: [150, "Description character limit exceeded"],
    },
    comments: [{ type: Schema.Types.ObjectId }],
    likes: [{ type: Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

module.exports = new Model("posts", postSchema);
