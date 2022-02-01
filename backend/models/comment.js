const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User required for posting comment"],
    },
    content: {
      type: String,
      max: [150, "Comment word limit exceeded"],
    },
    likes: [Schema.Types.ObjectId],
  },
  { timestamps: true }
);

module.exports = new Model("comments", commentSchema);
