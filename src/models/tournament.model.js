const mongoose = require("mongoose");
const tournament_Schema = new mongoose.Schema(
    {
        tournament_name : {
            type : String,
            trim : true,
        },
        team_name : {
            type : String,
            trim : true,
        },
        team_coach : {
            type : String,
            trim : true,
        },
        team_captain : {
            type : String,
            trim : true,
        },
        total_team_member : {
            type : Number,
            default : 0
        },
        team_founded_Year : {
            type : Number,
            default : 0
        },
        team_color : {
            type : String,
            trim : true,
        },
        sport_name : {
            type : String,
            trim : true,
        },
        home_Stadium : {
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

const Tournament = mongoose.model("Tournament" , tournament_Schema);
module.exports = Tournament;