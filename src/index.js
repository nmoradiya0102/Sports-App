const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
// const cron = require("cron");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/index")
const config = require("./config/config");
const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use("/v1" , routes);

app.use((req , res , next) => {
    next(new Error("Route not found..!"));
});

// database connection
connectDB();

// create a server using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("Server listning port number " + config.port);
});