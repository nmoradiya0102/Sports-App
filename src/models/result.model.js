const mongoose = require("mongoose");

const result_Schema = new mongoose.Schema(
    {
        game_name : {
            type : String,
            trim : true,
        },
        total_team : {
            type : String,
            trim : true,
        },
        home_team : {
            type : String,
            trim : true,
        },
        away_team : {
            type : String,
            trim : true,
        },
        game_date : {
            type : String,
            trim : true,
        },
        winning_team : {
            type : String,
            trim : true,
        },
        loser_team : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Result = mongoose.model("Result" , result_Schema);
module.exports = Result;