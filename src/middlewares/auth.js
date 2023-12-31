const jwt = require("jsonwebtoken");
const { Founder } = require("../models");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(res.status(401).json({
        status: 401,
        message : "Please authenticate..!"
      }));
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      config.jwt.secret_key
    );

    if (!decoded) {
      return next(new Error("Please enter valid token..!"));
    }

    const Founder = await Founder.findOne({ _id: decoded.Founder });
    if (!Founder) {
      return next(new Error("Please authenticate..!"));
    }

    req.Founder = Founder;
    next();
  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = auth;