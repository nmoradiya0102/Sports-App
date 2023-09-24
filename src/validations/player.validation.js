const Joi = require("joi");

/** create sport_player */
const create_player = {
  body: Joi.object().keys({
    player_name : Joi.string().required().trim(),
    player_description : Joi.string().required().trim(),
    player_DOB : Joi.string().required().trim(),
    sports : Joi.string().required().trim(),
    player_team_name : Joi.string().required().trim(),
    player_Position : Joi.string().required().trim(),
    player_contect : Joi.number().integer().required(),

  }),
};

module.exports = {
    create_player
};