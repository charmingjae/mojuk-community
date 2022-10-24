import express = require("express");
import mysql = require("mysql");

import { dbProperty } from "../db/property";

import dotenv = require("dotenv");
dotenv.config();

// Post paper

const post = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const publisher = req.body.data.publisher;
  const theme = req.body.data.theme;
  const society = req.body.data.society;
  const publishDate =
    req.body.data.year + "-" + req.body.data.month + "-" + req.body.data.day;

  let query =
    "INSERT INTO paper(publisher, theme, society, publishDate) values(?, ?, ?, ?)";
  const conn = await mysql.createConnection(dbProperty);
  conn.query(
    query,
    [publisher, theme, society, publishDate],
    (err: any, row: any) => {
      if (err) {
        conn.end();
        throw err;
      } else {
        conn.end();
        res
          .status(200)
          .send({ message: "Register paper successfully", status: "success" });
      }
    }
  );
};

const get = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  let query = "SELECT * FROM paper WHERE publisher = ? ORDER BY idx DESC";
  const conn = await mysql.createConnection(dbProperty);
  conn.query(query, [req.body.userId], (err: any, row: any) => {
    if (err) {
      conn.end();
      throw err;
    } else {
      conn.end();
      res.status(200).send({
        message: "Get paper list succeessfully",
        status: "success",
        data: row,
      });
    }
  });
};

export const PaperController = { post, get };
