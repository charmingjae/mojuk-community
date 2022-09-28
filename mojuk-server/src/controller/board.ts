import express = require("express");
import mysql = require("mysql");
import { dbProperty } from "../db/property";
import dotenv = require("dotenv");
dotenv.config();

const postContent = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const rb = req.body;
    let query =
      "INSERT INTO board(publisher, category, theme, contents) VALUES(?, ?, ?, ?)";
    const conn = await mysql.createConnection(dbProperty);
    conn.query(
      query,
      [rb.publisher, rb.category, rb.theme, rb.contents],
      (err: Error, row: any) => {
        if (err) {
          conn.end();
          throw err;
        } else {
          res
            .status(200)
            .send({ message: "Post contents Successfully", status: "success" });
        }
      }
    );
  } catch (e) {
    res
      .status(200)
      .send({ message: "Failed posting contents", status: "failed" });
  }
};

const getContent = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const boardType = req.query.boardType;
    let query = "SELECT * FROM board WHERE category = ?";
    const conn = await mysql.createConnection(dbProperty);
    conn.query(query, [boardType], (err: Error, row: any) => {
      if (err) {
        conn.end();
        throw err;
      } else {
        res
          .status(200)
          .send({
            message: "Get contents Successfully",
            status: "success",
            data: row,
          });
      }
    });
  } catch (e) {
    res.status(200).send({ message: "Failed get contents", status: "failed" });
  }
  console.log(req.query.boardType);
};

export const BoardController = { postContent, getContent };
