const Joi = require("joi");

/** create category */
const create_Team = {
  body: Joi.object().keys({
    team_name : Joi.string().required().trim(),
    team_sport : Joi.string().required().trim(),
    team_establish_year : Joi.number().integer().required(),
    team_Stadium : Joi.string().required().trim(),
    team_captain : Joi.string().required().trim(),
    team_Coach : Joi.string().required().trim(),
    total_team_member : Joi.string().required().trim(),
  }),
};

module.exports = {
    create_Team
}
