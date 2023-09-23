const Joi = require("joi");

/** create category */
const create_Category = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_description: Joi.string().required().trim(),
    Team : Joi.string().required().trim(),
  }),
};

module.exports = {
    create_Category
}