const mongoose = require("mongoose");
const category_Schema = new mongoose.Schema(
    {
        category_name : {
            type : String,
            trim : true,
        },
        category_description : {
            type : String,
            trim : true,
        },
        Team : {
            type : mongoose.Types.ObjectId,
            ref : "Team",
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

const Category = mongoose.model("Category" , category_Schema);
module.exports = Category;