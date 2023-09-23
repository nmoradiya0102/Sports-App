const Joi = require("joi");

/** create Contect */
const create_Contect = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    birth_date : Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};


/** Send mail */
const send_Mail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
}

module.exports = {
  create_Contect,
  send_Mail
};