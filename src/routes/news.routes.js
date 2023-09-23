const express = require("express");
const { newsValidation } = require("../validations");
const { newsController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create news */
router.post(
  "/create-news",
  validate(newsValidation.create_News),
  newsController.create_News
);

/** news list */
router.get(
  "/list",
  newsController.get_News_List
)

router.delete(
  "/delete/:NewsId",
  newsController.delete_News
)

router.put(
  "/update-news/:NewsId",
  newsController.update_News
)

module.exports = router;