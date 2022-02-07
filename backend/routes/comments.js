const router = require("express").Router();
const commentController = require("../controllers/comment");

router.post("/create", commentController.createComment);
router.delete("/delete", commentController.deleteComment);
router.get("/:id", commentController.getComment);
router.put("/:id", commentController.updateComment);

module.exports = router;
