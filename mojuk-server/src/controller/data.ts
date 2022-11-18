import express = require("express");
import mysql = require("mysql");

import { dbProperty } from "../db/property";

import dotenv = require("dotenv");
dotenv.config();

const getUserInfo = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const userID = req.body.userID;

  let query =
    "SELECT userID, userName, userGit, userEmail, userPhone FROM user WHERE userID = ?";
  const conn = await mysql.createConnection(dbProperty);
  conn.query(query, [userID], (err: any, row: any) => {
    if (err) {
      conn.end();
      throw err;
    } else {
      res
        .status(200)
        .send({ message: "Find User data", status: "success", userData: row });
      conn.end();
    }
  });
};

const getUserInfoByName = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const userName = req.body.userName;

  // Setting Database
  let query = "SELECT userID, userName FROM user WHERE userName = ?";
  let allUser = "SELECT userID, userName FROM user";
  const conn = await mysql.createConnection(dbProperty);
  // Request Data
  conn.query(
    userName == "" ? allUser : query,
    [userName],
    (err: any, row: any) => {
      if (err) {
        conn.end();
        throw err;
      } else if (row.length < 1) {
        res.status(200).send({ message: "User not exist", status: "failed" });
        conn.end();
      } else {
        console.log("ROW : ", row);
        res
          .status(200)
          .send({ message: "User found", status: "success", userData: row });
        conn.end();
      }
    }
  );
};

const getUserPaper = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("request : ", req.body);
};

export const DataController = { getUserInfo, getUserInfoByName, getUserPaper };
