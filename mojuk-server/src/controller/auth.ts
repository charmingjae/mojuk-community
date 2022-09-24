import express = require("express");
import mysql = require("mysql");

import client from "../util/redis";
import { token } from "../util/token";
import { dbProperty } from "../db/property";
import { createHashedPassword, verifyPassword } from "../util/salt";

import jwt = require("jsonwebtoken");
import dotenv = require("dotenv");
dotenv.config();

// *==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
// Login Controller
// *==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
const login = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const userID = req.body.userID;
  const userPW = req.body.userPW;

  let query = "SELECT userPW, userSalt FROM user WHERE userID = ?";
  const conn = await mysql.createConnection(dbProperty);
  conn.query(query, [userID], (err: any, row: any) => {
    if (err) {
      conn.end();
      throw err;
    } else if (row.length < 1) {
      res.status(200).send({ message: "User not exist", status: "failed" });
      conn.end();
    } else if (row.length > 1) {
      res.status(200).send({ message: "Error on user data", status: "failed" });
      conn.end();
    } else {
      const dbUser = JSON.parse(JSON.stringify(row))[0];
      verifyPassword(userPW, dbUser.userSalt, dbUser.userPW).then((result) => {
        if (result) {
          const getToken = token(userID);
          res.status(200).send({
            message: "Login Success",
            status: "success",
            token: getToken,
          });
          // /* Save token in server */
          client.set(userID, getToken.refreshToken);
          client.expire(userID, 10 * 24 * 60 * 60 * 1000); // 10일 이후 파기
          conn.end();
        } else {
          res.status(200).send({ message: "Login Failed", status: "failed" });
          conn.end();
        }
      });
    }
  });
};

// *==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
// Register Controller
// *==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
const register = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // Request info
  const userID = req.body.userID;
  const userPW = req.body.userPW;
  // Query String
  let query = "SELECT COUNT(*) as cnt FROM user WHERE userID=?";
  // Database Connection
  const conn = await mysql.createConnection(dbProperty);
  conn.query(query, [userID, userPW], (err: Error, row: any) => {
    if (err) {
      conn.end();
      throw err;
    } else if (JSON.parse(JSON.stringify(row))[0].cnt != 0) {
      res
        .status(200)
        .send({ message: "UserID is already exist", status: "failed" });
      conn.end();
    } else {
      createHashedPassword(userPW).then((result) => {
        const query = "INSERT INTO user VALUES(?,?,?)";
        conn.query(
          query,
          [userID, result.hashedPassword, result.salt],
          (err: Error, row: any) => {
            if (err) {
              conn.end();
              throw err;
            } else {
              res.status(201).send("Insert data successfully.");
              conn.end();
            }
          }
        );
      });
    }
  });
};

// *==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
// Utility
// *==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
const checkLogin = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  let decode: string | jwt.JwtPayload;
  try {
    decode = jwt.verify(
      req.query.accessToken.toString(),
      process.env.SERVER_SECRET_KEY
    );
    res.status(200).send({ data: decode["userID"], status: "success" });
  } catch (err) {
    try {
      decode = jwt.verify(
        req.query.refreshToken.toString(),
        process.env.SERVER_SECRET_KEY
      );
      console.log(decode);
      await client.get(decode["userID"]).then((response) => {
        console.log("response : ", response);
        console.log("query : ", req.query.refreshToken);
        console.log(response === req.query.refreshToken);
        if (response != null && response === req.query.refreshToken) {
          res.status(200).send({
            data: decode["userID"],
            token: token(decode["userID"]),
            status: "refresh",
          });
        } else {
          res.status(200).send({ message: err.message, status: "failed" });
        }
      });
    } catch (e) {
      res.status(200).send({ message: err.message, status: "failed" });
    }
  }
};

export const AuthController = { login, register, checkLogin };
