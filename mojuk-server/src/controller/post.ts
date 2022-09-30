import express = require("express");
import mysql = require("mysql");

import { dbProperty } from "../db/property";
import dotenv = require("dotenv");
dotenv.config();

const getPost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let query = "SELECT * FROM board WHERE idx = ?";
    const conn = await mysql.createConnection(dbProperty);
    conn.query(query, [req.params.postId], (err: Error, row: any) => {
      if (err) {
        conn.end();
        throw err;
      } else if (row.length < 1) {
        res
          .status(200)
          .send({ message: "Content is not exist", status: "failed" });
        conn.end();
      } else if (row.length > 1) {
        res
          .status(200)
          .send({ message: "Error on post data", status: "failed" });
        conn.end();
      } else {
        res.status(200).send({
          message: "Content is found",
          status: "success",
          data: row[0],
        });
      }
    });
  } catch (e) {
    res.status(200).send({ message: "Failed get post", status: "failed" });
  }
  console.log(req.params);
};

export const PostController = { getPost };
