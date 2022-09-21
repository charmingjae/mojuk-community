import express = require("express");
import mysql = require("mysql");

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
  res.send("Server send Response!!");
};

export const DefaultController = { main, test };
