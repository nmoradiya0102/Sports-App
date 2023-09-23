const Joi = require("joi");

// Create result
const create_Result = {
    body : Joi.object().keys({
        game_name : Joi.string().required().trim(),
        total_team : Joi.number().integer().required(),
        home_team : Joi.string().required().trim(),
        away_team : Joi.string().required().trim(),
        game_date : Joi.string().required().trim(),
        winning_team : Joi.string().required().trim(),
        loser_team : Joi.string().required().trim(),
    }),
};

module.exports = {
    create_Result
}