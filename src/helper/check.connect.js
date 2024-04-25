"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
const countConnect = () => {
  const numCnt = mongoose.connect.length;
  console.log(`Number of connection ::: ${numCnt}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connect.length;
    const numCores = os.cpus().length;
    const memoryUse = process.memoryUsage().rss;
    // Ex: each cores can handle 5 connections
    const maxConnections = numCores * 5;
    console.log(`Active connection :: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUse / 1024 / 1024}`);
    if (numConnection > maxConnections) {
      console.log(`Connection overloaded`);
    }
  }, _SECONDS); // Monitor every 5 seconds
};
module.exports = {
  countConnect,
  checkOverload,
};
