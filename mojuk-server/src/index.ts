import express = require("express");
import dotenv = require("dotenv");
import cors = require("cors");
import { checkDatabaseInitConnection } from "./db/connection";
import { appRouter } from "./routes";

const app: express.Application = express();
dotenv.config();

const corsOption = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json()); // JSON -> body
// app.use(express.urlencoded({ extended: false })); // HTML Form -> body

app.use(appRouter);

// *==*==*==*==*==*==*==*==*==*
// Listen server
app.listen(process.env.SERVER_PORT, async () => {
  console.log(
    "Exress server listen... in port < " + process.env.SERVER_PORT + " >"
  );
  /* Check Database connection */
  await checkDatabaseInitConnection();
});
