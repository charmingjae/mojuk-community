import express = require("express");
import dotenv = require("dotenv");
import { Auth } from "./a";
import { startConnect } from "./db/conn";
const app: express.Application = express();
dotenv.config();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello!");
  Auth.a();
  startConnect();
});
// *==*==*==*==*==*==*==*==*==*
// Listen server
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    "Exress server listen... in port < " + process.env.SERVER_PORT + " >"
  );
});
