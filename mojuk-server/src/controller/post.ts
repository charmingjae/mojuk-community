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
};

const deletePost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let query = "DELETE FROM board WHERE idx=? AND publisher=?";
    const conn = await mysql.createConnection(dbProperty);
    conn.query(
      query,
      [req.body.postId, req.body.publisher],
      (err: Error, row: any) => {
        if (err) {
          conn.end();
          throw err;
        } else {
          res
            .status(200)
            .send({ message: "Delete post successfully", status: "success" });
        }
      }
    );
  } catch (e) {
    res.status(200).send({ message: "Failed delete post", status: "failed" });
  }
};

const updatePost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let query =
      "UPDATE board SET theme=?, contents=? WHERE idx=? AND publisher=?";
    const conn = await mysql.createConnection(dbProperty);
    console.log(req.body);
    conn.query(
      query,
      [
        req.body.contents.theme,
        req.body.contents.contents,
        req.body.contents.idx,
        req.body.contents.publisher,
      ],
      (err: Error, row: any) => {
        if (err) {
          conn.end();
          res
            .status(200)
            .send({ message: "Failed update post", status: "failed" });
          throw err;
        } else {
          res
            .status(200)
            .send({ message: "Update post successfully", status: "success" });
        }
      }
    );
  } catch (e) {
    console.log("ERRRRRRR!!!!!!!!!!!!!");
    res.status(200).send({ message: "Failed update post", status: "failed" });
  }
};

export const PostController = { getPost, deletePost, updatePost };
