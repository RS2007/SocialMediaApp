const mongoose = require("mongoose");
const { Schema, model } = mongoose;

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

module.exports = new model("comments", commentSchema);
