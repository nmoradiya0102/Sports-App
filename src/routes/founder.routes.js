const express = require("express");
const { founderValidation } = require("../validations");
const { founderController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();
/** create user */
router.post(
    "/create-founder",
    validate(founderValidation.create_Founder),
    founderController.create_Founder
);
/** Get user list */
router.get(
    "/list",
    founderController.get_Founder_List
);
router.delete(
    "/delete-founder/:founderId",
    founderController.delete_Founder
);
router.put(
    "/update-founder/:founderId",
    validate(founderValidation.create_Founder),
    founderController.update_Founder
);

module.exports = router;