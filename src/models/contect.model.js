const mongoose = require("mongoose");

const contect_Schema = new mongoose.Schema(
    {
      first_name: {
        type : String,
        trim : true,
      },
      last_name : {
        type : String,
        trim : true,
      },
      email : {
        type : String,
        trim : true,
      },
      birth_date : {
        type : String,
        trim : true,
      },
      password : {
        type : String,
      },
      is_active : {
        type : Boolean,
        default : true,
      },
    },
    {
      timestamps : true,
      versionKey : false,
    }
  );

const Contect = mongoose.model("Contect",contect_Schema);
module.exports = Contect;