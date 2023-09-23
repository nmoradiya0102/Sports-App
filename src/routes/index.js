const express = require("express");
const founderRoute = require("./founder.routes");
const contectRoute = require("./contect.routes");
const sportsRoute = require("./sports.routes");
const tournamentRoute = require("./tournament.routes");
const newsRoute = require("./news.routes");
const resultRoute = require("./result.routes");

const router = express.Router();
router.use("/founder" , founderRoute);
router.use("/contect" , contectRoute);
router.use("/sports" , sportsRoute);
router.use("/tournament" , tournamentRoute);
router.use("/news" , newsRoute);
router.use("/result" , resultRoute);

module.exports = router;