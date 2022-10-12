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
  console.log("request : ", req.body);
};

const getUserPaper = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("request : ", req.body);
};

export const DataController = { getUserInfo, getUserPaper };
