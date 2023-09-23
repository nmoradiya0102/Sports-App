const express = require("express");
const { tournamentValidation } = require("../validations");
const { tournamentController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create tournament */
router.post(
  "/create-tournament",
  validate(tournamentValidation.create_Tournament),
  tournamentController.create_Tournament
);

/** team list */
router.get(
  "/list",
  tournamentController.get_Tournament_List
)

router.delete(
  "/delete/:tournamentId",
  tournamentController.delete_Tournament
)

router.put(
  "/update-tournament/:tournamentId",
  tournamentController.update_Tournament
)

module.exports = router;