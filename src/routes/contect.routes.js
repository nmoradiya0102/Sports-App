const express = require("express");
const { contectValidation } = require("../validations");
const { contectController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create contect */
router.post(
    "/create-contect",
    validate(contectValidation.create_Contect),
    contectController.create_Contect
);

/** Get contect list */
router.get(
    "/list",
    contectController.get_Contect_List
);

// delete contect
router.delete(
    "/delete-contect/:contectId",
    contectController.delete_Contect
);

// update contect
router.put(
    "/update-contect/:contectId",
    validate(contectValidation.create_Contect),
    contectController.update_Contect
);

// mail send
router.post(
    "/send-mail",
    validate(contectValidation.send_Mail),
    contectController.send_Mail
)

module.exports = router;