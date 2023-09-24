const Joi = require("joi");

/** Create token  */
const generate_Token = {
  body: Joi.object({
    Founder : Joi.string().required().trim(),
  }),
};

module.exports = {
  generate_Token,
};
