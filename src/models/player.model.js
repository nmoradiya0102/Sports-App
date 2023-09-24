const mongoose = require("mongoose");

const player_Schema = new mongoose.Schema(
    {
        player_name : {
            type : String,
            trim : true
        },
        player_description : {
            type : String,
            trim : true
        },
        player_DOB : {
            type : String,
            trim : true,
        },
        sports:{
            type : mongoose.Types.ObjectId,
            ref : "Sports"
        },
        player_team_name : {
            type : String,
            trim : true,
        },
        player_Position : {
            type : String,
            trim : true,
        },
        player_contect : {
            type : Number,
            default : 0,
        },
        is_active:{
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Player = mongoose.model("Player",player_Schema);
module.exports = Player