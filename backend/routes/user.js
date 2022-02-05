const router = require("express").Router();
const userController = require("../controllers/user.js");

router.get("/user/:id", userController.getUserById);
router.get("/followers", userController.getFollowers);
router.post("/register", userController.register);
router.get("/following", userController.getFollowing);
