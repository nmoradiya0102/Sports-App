const mongoose = require("mongoose");
const team_Schema = new mongoose.Schema(
    {
        team_name : {
            type : String,
            trim : true,
        },
        team_sport : {
            type : String,
            trim : true,
        },
        team_establish_year : {
            type : Number,
            default : 0
        },
        team_Stadium : {
            type : String,
            trim : true,
        },
        team_captain : {
            type : String,
            trim : true,
        },
        team_Coach : {
            type : String,
            trim : true,
        },
        total_team_member : {
            type : Number,
            default : 0
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

const Team = mongoose.model("Team" , team_Schema);
module.exports = Team;