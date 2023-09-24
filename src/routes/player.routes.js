const express = require("express");
const validate = require("../middlewares/validate");
const { playerValidation } = require("../validations");
const { playerController } = require("../controllers");
const router = express.Router()

router.post(
    "/create-player",
    validate(playerValidation.create_player),
    playerController.create_Player
)

router.put(
    "/update-player/:playerId",
    validate(playerValidation.create_player),
    playerController.update_Player
)

router.delete(
    "/delete-player/:playerId",
    playerController.delete_Player
)

router.get(
    "/list",
    playerController.get_Player_List
)



module.exports = router;
