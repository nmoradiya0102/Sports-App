const Joi = require("joi");

/** create news */
const create_News = {
  body: Joi.object().keys({
    news_company_name : Joi.string().required().trim(),
    news_headline : Joi.string().required().trim(),
    news_description : Joi.string().required().trim(),
    news_published_date : Joi.string().required().trim(),
    news_editer : Joi.string().required().trim(),
  }),
};

module.exports = {
    create_News
}