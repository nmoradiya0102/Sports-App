// founder.js
const mongoose = require('mongoose');

const founder_Schema = new mongoose.Schema(
    {
        founder_name: {
          type: String,
          required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        company_name: {
          type: String,
          required: true,
        },
        founded_Year :{
            type: Number,
            required: true,
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
});

module.exports = mongoose.model('Founder', founder_Schema);
