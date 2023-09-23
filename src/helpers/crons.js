const CronJob = require("cron").CronJob;
const config = require("../config/config");
const { start } = require("repl");
const { emailService } = require("../services");

/** It's running on every 3 seconds. */
new CronJob(
  "*/3 * * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** It's running on when clock time is 7:45 of 24 hours */
/**new CronJob(
  "37 8 * * *",
  function () {
    console.log("It's running on when clock time is 8:37");
  },
  null,
  false,
  //   "America/Sao_Paulo"
  "Asia/Kolkata"
).start(); */

/** Send email */
new CronJob(
  "50 7 * * *",
  function () {
    emailService.send_Mail(
      "nmoradiya07@gmail.com",
      "Morning message",
      "Good morning Mily! Have a nice day ;)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();