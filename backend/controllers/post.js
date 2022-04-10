const { _cloudinary } = require("../config/_cloudinary");
const postModel = require("../models/post");

module.exports.createPost = async (req, res) => {
  try {
    const { id: user } = res.locals;
    const { pic, desc } = req.body;
    const uploadResponse = await _cloudinary.uploader.upload(pic, {
      upload_preset: "fq7pbufy",
    });
    console.log(uploadResponse);
    const newPost = new postModel({
      user,
      pic: uploadResponse.secure_url,
      desc,
    });
    await newPost.save();
    res.status(200).send("New post created succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Database error");
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.getPosts = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};
