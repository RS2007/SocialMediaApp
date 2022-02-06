const router = require("express").Router();
const userController = require("../controllers/user.js");

router.get("/:id", userController.getUserById);
router.get("/followers", userController.getFollowers);
router.post("/register", userController.register);
router.get("/following", userController.getFollowing);
router.delete("/delete", userController.deleteUser);
router.post("/update", userController.editUser);

module.exports = router;
