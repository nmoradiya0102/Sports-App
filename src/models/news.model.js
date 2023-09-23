const mongoose = require("mongoose");

const news_Schema = new mongoose.Schema(
    {
        news_company_name : {
            type : String,
            trim : true,
        },
        news_headline : {
            type : String,
            trim : true,
        },
        news_description : {
            type : String,
            trim : true,
        },
        news_published_date : {
            type : String,
            trim : true,
        },
        news_editer : {
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

const News = mongoose.model("News" , news_Schema);
module.exports = News;