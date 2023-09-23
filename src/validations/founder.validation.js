const Joi = require("joi");

/** create founder */
const create_Founder = {
  body: Joi.object().keys({
    founder_name : Joi.string().required().trim(),
    age : Joi.number().integer().required(),
    company_name : Joi.string().required().trim(),
    founded_Year : Joi.number().integer().required(),
  }),
};

module.exports = {
    create_Founder
}