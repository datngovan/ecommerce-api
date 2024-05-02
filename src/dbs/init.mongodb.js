"use strict";

const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");
const connectStr = `mongodb+srv://datngo:datngo123@cluster0.zkx2xob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

class Database {
  constructor() {
    this.connect();
  }
  //connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectStr)
      .then((_) => console.log("Connect MongoDB Success Pro"))
      .catch((err) => console.log("err", err));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();
module.exports = instanceMongoDb;
