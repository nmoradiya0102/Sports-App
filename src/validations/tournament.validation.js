const Joi = require("joi");

/** create tournament */
const create_Tournament = {
  body: Joi.object().keys({
    tournament_name : Joi.string().required().trim(),
    team_name : Joi.string().required().trim(),
    team_coach : Joi.string().required().trim(),
    team_captain : Joi.string().required().trim(),
    total_team_member : Joi.number().integer().required(),
    team_founded_Year : Joi.number().integer().required(),
    team_color : Joi.string().required().trim(),
    sport_name : Joi.string().required().trim(),
  }),
};

module.exports = {
    create_Tournament
}