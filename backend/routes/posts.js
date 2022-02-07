const router = require("express").Router();
const postController = require("../controllers/post");

router.post("/", postController.createPost);
router.delete("/", postController.deletePost);
router.get("/:id", postController.getPosts);
router.put("/:id", postController.updatePost);

module.exports = router;
