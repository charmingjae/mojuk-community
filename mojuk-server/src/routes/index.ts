import express = require("express");
import { defaultRouter } from "./default";

const appRouter: express.Router = express.Router();

appRouter.use("/api", defaultRouter);

export { appRouter };
