const { tokenService } = require("../services");
const moment = require("moment");

/** Create token in jsonwebtoken and save in our database. */
const generate_Token = async (req, res) => {
  try {
    const reqBody = req.body;
    reqBody.expire_time = moment().add(10, "minutes");

    // Create token
    const token = await tokenService.generate_Token(reqBody);
    reqBody.token = token;
    const save_token = await tokenService.save_Token(reqBody);
    res
      .status(200)
      .json({
        success: true,
        message: "Token created successfully..! ",
        data: save_token
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong ! ",
    });
  }
};

/** Verify token */
const verify_Token = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token verified successfully..! ",
    data: req.Founder,
  });
};

module.exports = {
  generate_Token,
  verify_Token,
};