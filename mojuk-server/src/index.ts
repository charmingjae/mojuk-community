import express = require("express");
import dotenv = require("dotenv");
import { checkDatabaseInitConnection } from "./db/connection";
import { appRouter } from "./routes";

const app: express.Application = express();
dotenv.config();

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
