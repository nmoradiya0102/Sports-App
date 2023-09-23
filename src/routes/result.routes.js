const express = require("express");
const { resultValidation } = require("../validations");
const { resultController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Result */
router.post(
  "/create-result",
  validate(resultValidation.create_Result),
  resultController.create_Result
);

/** news Result */
router.get(
  "/list",
  resultController.get_Result_List
)

// delete Result
router.delete(
  "/delete/:ResultId",
  resultController.delete_Result
)

// update Result
router.put(
  "/update-result/:ResultId",
  resultController.update_Result
)

module.exports = router;