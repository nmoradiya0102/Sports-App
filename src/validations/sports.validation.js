const Joi = require("joi");

// Create Sports
const create_Sports = {
    body : Joi.object().keys({
        sports_name : Joi.string().required().trim(),
        sports_description : Joi.string().required().trim(),
        sports_location : Joi.string().required().trim(),
        sports_organizer : Joi.string().required().trim(),
    }),
};

module.exports = {
    create_Sports
}