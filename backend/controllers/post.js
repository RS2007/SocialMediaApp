const { _cloudinary } = require("../config/_cloudinary");
const postModel = require("../models/post");
const userModel = require("../models/user");

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

module.exports.getPostsById = async (req, res) => {
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

module.exports.getAllPosts = async (req, res) => {
  try {
    const { id: userId } = res.locals;
    console.log(userId);
    const user = await userModel.findById(userId).lean().exec();
    const posts = await postModel
      .find({ user: user.followers })
      .populate("user")
      .exec();
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("errorr");
  }
};
