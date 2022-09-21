import express = require("express");
import { dbProperty } from "../db/property";
import mysql = require("mysql");
import { createHashedPassword } from "../util/salt";

const test = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("auth controller activate");
  res.send("Beautiful");
};

const login = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("request: ", req.body);
  res.send("Post login!!");
};

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
      console.log("here..");
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
              console.log(row);
              res.status(201).send("Insert data successfully.");
              conn.end();
            }
          }
        );
      });
    }
  });
};

export const AuthController = { login, register, test };
