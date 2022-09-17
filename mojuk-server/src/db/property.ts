import dotenv = require("dotenv");
dotenv.config();

export const dbProperty = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_ROOT,
  password: process.env.DB_ROOT_PASSWORD,
  database: process.env.DB_DATABASE,
};
