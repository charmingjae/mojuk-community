import express = require("express");
import { defaultRouter } from "./default";
import { authRouter } from "./auth";
import { boardRouter } from "./board";
import { postRouter } from "./post";

const appRouter: express.Router = express.Router();

appRouter.use("/api", defaultRouter);
appRouter.use("/api/auth", authRouter);
appRouter.use("/api/board", boardRouter);
appRouter.use("/api/post", postRouter);

export { appRouter };
