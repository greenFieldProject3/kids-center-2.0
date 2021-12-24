const express = require("express");
const router = express.Router();

const ForumController = require("../controllers/events");
router.route("/")
  .get(ForumController.find_All)

router
  .route("/add")
  .post(ForumController.create_One)
  .get(ForumController.find_One)
  .put(ForumController.update_One)
  .delete(ForumController.remove_One);

module.exports = router;
