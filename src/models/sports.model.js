const mongoose = require("mongoose");

const sports_Schema = new mongoose.Schema(
    {
        sports_name : {
            type : String,
            trim : true,
        },
        sports_description : {
            type : String,
            trim : true,
        },
        sports_location : {
            type : String,
            trim : true,
        },
        sports_organizer : {
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

const Sports = mongoose.model("Sports" , sports_Schema);
module.exports = Sports;