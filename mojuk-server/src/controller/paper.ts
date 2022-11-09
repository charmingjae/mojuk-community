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
  const member = req.body.member;
  const publisher = req.body.data.publisher;
  const theme = req.body.data.theme;
  const society = req.body.data.society;
  const publishDate =
    req.body.data.year + "-" + req.body.data.month + "-" + req.body.data.day;

  let member_query_list = [];
  for (let i in member) {
    member_query_list.push(member[i].userID);
    member_query_list.push(theme);
  }
  let query =
    "INSERT INTO paper(publisher, theme, society, publishDate) values(?, ?, ?, ?)";
  let member_insert_query =
    "INSERT INTO publish(publisher, paperName) values" +
    "(?, ?), ".repeat(member.length - 1) +
    "(?, ?)";
  const conn = await mysql.createConnection(dbProperty);
  conn.query(
    query,
    [publisher, theme, society, publishDate],
    (err: any, row: any) => {
      if (err) {
        conn.end();
        throw err;
      } else {
        conn.query(
          member_insert_query,
          member_query_list,
          (err: any, row: any) => {
            if (err) {
              conn.end();
              throw err;
            } else {
              conn.end();
              res.status(200).send({
                message: "Register paper successfully",
                status: "success",
              });
            }
          }
        );
      }
    }
  );
};

const get = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  let query =
    "SELECT * FROM paper WHERE theme IN (SELECT paperName FROM publish WHERE publisher = ?) ORDER BY idx DESC";
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

const deleteMember = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("userID : ", req.body.userID);
  console.log("paperName : ", req.body.paperName);
  let query = "DELETE FROM publish WHERE publisher = ? and paperName = ?";
  const conn = await mysql.createConnection(dbProperty);
  conn.query(
    query,
    [req.body.userID, req.body.paperName],
    (err: any, row: any) => {
      if (err) {
        conn.end();
        throw err;
      } else {
        conn.end();
        res.status(200).send({
          message: "Delete paper list succeessfully",
          status: "success",
        });
      }
    }
  );
};

export const PaperController = { post, get, deleteMember };
