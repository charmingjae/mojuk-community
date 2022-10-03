import express = require("express");
import mysql = require("mysql");

import { dbProperty } from "../db/property";

import dotenv = require("dotenv");
dotenv.config();

const register = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.body);
  try {
    let query = "INSERT INTO comment(writer, postID, contents) VALUES(?, ?, ?)";
    const conn = await mysql.createConnection(dbProperty);
    conn.query(
      query,
      [req.body.userID, req.body.postID, req.body.comment],
      (err: Error, row: any) => {
        if (err) {
          conn.end();
          res
            .status(200)
            .send({ message: "Failed register comment", status: "failed" });
          throw err;
        } else {
          res.status(200).send({
            message: "Register comment successfully",
            status: "success",
          });
        }
      }
    );
  } catch (e) {
    res
      .status(200)
      .send({ message: "Failed register comment", status: "failed" });
  }
};

const get = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  req.body;
  try {
    let query = "SELECT * FROM comment WHERE postID = ? ORDER BY idx DESC";
    const conn = mysql.createConnection(dbProperty);
    conn.query(query, [req.body.postID], (err: Error, row: any) => {
      if (err) {
        conn.end();
        res
          .status(200)
          .send({ message: "Failed get comment", status: "failed" });
        throw err;
      } else {
        console.log(row);
        res.status(200).send({
          message: "Get comment successfully",
          status: "success",
          data: row,
        });
      }
    });
  } catch (e) {
    res.status(200).send({ message: "Cannot get comment", status: "failed" });
  }
};

export const CommentController = { register, get };
