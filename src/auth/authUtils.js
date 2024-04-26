"use strict";
const jwt = require("jsonwebtoken");
const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    // accessToken
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "2 days",
    });
    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "7 days",
    });
    //vertify using token
    jwt.verify(accessToken, publicKey, (error, decode) => {
      if (error) {
        console.error("error verify::", error);
      } else {
        console.log("decode verify ::", decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (error) {}
};

module.exports = {
  createTokenPair,
};
