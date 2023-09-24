const mongoose = require("mongoose");

const token_Schema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    expire_time: {
      type: Date,
      default: null,
    },
    Founder: {
      type: mongoose.Types.ObjectId,
      ref: "Founder",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Token = mongoose.model("Token", token_Schema);

module.exports = Token;
