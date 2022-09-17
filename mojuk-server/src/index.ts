import express = require("express");
import dotenv = require("dotenv");
import { handleDatabaseConnection } from "./db/connection";
const app: express.Application = express();
dotenv.config();

// *==*==*==*==*==*==*==*==*==*
// Listen server
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    "Exress server listen... in port < " + process.env.SERVER_PORT + " >"
  );
  /* Check Database connection */
  handleDatabaseConnection();
});
