import express = require("express");
import { defaultRouter } from "./default";
import { authRouter } from "./auth";

const appRouter: express.Router = express.Router();

appRouter.use("/api", defaultRouter);
appRouter.use("/api/auth", authRouter);

export { appRouter };
