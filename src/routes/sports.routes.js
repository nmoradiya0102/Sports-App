const express = require("express");
const { sportsValidation } = require("../validations");
const { sportsController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create sports */
router.post(
  "/create-sports",
  validate(sportsValidation.create_Sports),
  sportsController.create_Sports
);

/** sports list */
router.get(
  "/list",
  sportsController.get_Sports_List
)

/** delete sports */
router.delete(
  "/delete/:sportsId",
  sportsController.delete_Sports
)

/** update sports */
router.put(
  "/update-sports/:sportsId",
  sportsController.update_Sports
)

module.exports = router;