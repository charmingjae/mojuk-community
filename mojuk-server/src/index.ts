import express = require("express");
import dotenv = require("dotenv");
import { doConnect } from "./db/conn";
const app: express.Application = express();
dotenv.config();

// *==*==*==*==*==*==*==*==*==*
// Listen server
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    "Exress server listen... in port < " + process.env.SERVER_PORT + " >"
  );
  doConnect();
});
