const postModel = require("../models/post");

module.exports.createPost = async (req, res) => {
  try {
    const { id: user } = res.locals;
    const { pic, desc } = req.body;
    const newPost = new postModel({ user, pic, desc });
    await newPost.save();
    res.status(200).send("New post created succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Database error");
  }
};

module.exports.deletePost = async (req, res) => {};

module.exports.getPosts = async (req, res) => {};

module.exports.updatePost = async (req, res) => {};
