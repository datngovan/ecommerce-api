require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//init db
require("./dbs/init.mongodb");
// const { checkOverload } = require("./helper/check.connect");
// checkOverload();
// //init routes
// app.get("/", (req, res, next) => {
//   const str = "hello my name is Dat";
//   return res.status(500).json({
//     message: "Welcome",
//     metadata: str.repeat(100000),
//   });
// });
app.use("/", require("./routes/index"));

//handle err

module.exports = app;
