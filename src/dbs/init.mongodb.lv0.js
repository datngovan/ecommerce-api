"use strict";

const mongoose = require("mongoose");

const connectStr = "mongodb://localhost:27017/shopDEV";
mongoose
  .connect(connectStr)
  .then((_) => console.log("Connect MongoDB Success"))
  .catch((err) => console.log("err", err));

if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
