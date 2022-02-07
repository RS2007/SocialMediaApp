const commentModel = require("../models/comment");

module.exports.createComment = async (req, res) => {
  try {
    const { id: user } = res.locals;
    const { content } = req.body;
    const newComment = new commentModel({ user, content });
    await newComment.save();
    res.status(200).send("New comment created succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Database error");
  }
};

module.exports.deleteComment = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.getComment = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.updateComment = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};
