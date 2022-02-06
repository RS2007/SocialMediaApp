const userModel = require("../models/user");

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id).exec();
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.getFollowers = async (req, res) => {
  try {
    const { id } = res.locals;
    const user = await userModel.findById(id).populate("users").exec();
    res.status(200).send(user.followers);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.register = async (req, res) => {
  try {
    const { email, password, fullName, username } = req.body;
    const newUser = await new userModel({
      email,
      password,
      fullName,
      username,
    });
    await newUser.save();
    res.status(200).send("You have registered succesfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Registration not succesful" });
  }
};

module.exports.getFollowing = async (req, res) => {
  try {
    const { id } = res.locals;
    const following = await userModel.findById(id).populate("users").exec()
      .following;
    res.status(200).json(following);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = res.locals;
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).send("User deleted succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports.editUser = async (req, res) => {
  try {
    const { id } = res.locals;
    const user = await userModel.findByIdAndUpdate(id, req.body);
    res.status(200).send("User edited succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).jsoN({ error: "Database error" });
  }
};
