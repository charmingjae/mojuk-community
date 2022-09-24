import express = require("express");
import mysql = require("mysql");
import jwt = require("jsonwebtoken");
import dotenv = require("dotenv");

// Use dotenv module
dotenv.config();

const main = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("main controller activated");
  res.send("This is main!!");
};

const test = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(process.env.SERVER_SECRET_KEY);
  const accessToken = jwt.sign(
    {
      type: "jwt",
      tokenType: "access",
      name: "chaminjae",
      iat: Math.floor(Date.now() / 1000) - 30,
    },
    process.env.SERVER_SECRET_KEY,
    { algorithm: "HS256", expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    {
      type: "jwt",
      tokenType: "refresh",
      name: "chaminjae",
      iat: Math.floor(Date.now() / 1000) - 30,
    },
    process.env.SERVER_SECRET_KEY,
    { algorithm: "HS256", expiresIn: "10d" }
  );
  res.send({ accessToken: accessToken, refreshToken: refreshToken });
};

export const DefaultController = { main, test };
