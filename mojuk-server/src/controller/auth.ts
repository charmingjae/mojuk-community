import express = require("express");

const test = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("auth controller activate");
  res.send("Beautiful");
};

export const AuthController = { test };
