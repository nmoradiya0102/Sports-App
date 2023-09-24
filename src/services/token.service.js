const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");

//  Create token in jsonwebtoken
const generate_Token = async (reqBody) => {
  let payload = {
    ...reqBody,
    expire_time: reqBody.expire_time.unix(),
  };

  return jwt.sign(payload, config.jwt.secret_key);
};

// Save token in our database
const save_Token = async (reqBody) => {
  return Token.findOneAndUpdate(
    { user: reqBody.Founder },
    {
      $set: {
        ...reqBody,
      },
    },
    { new: true, upsert: true }
  );
};

module.exports = {
  generate_Token,
  save_Token,
};