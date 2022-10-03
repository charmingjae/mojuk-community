import express = require("express");
import { defaultRouter } from "./default";
import { authRouter } from "./auth";
import { boardRouter } from "./board";
import { postRouter } from "./post";
import { commentRouter } from "./comment";

const appRouter: express.Router = express.Router();

appRouter.use("/api", defaultRouter);
appRouter.use("/api/auth", authRouter);
appRouter.use("/api/board", boardRouter);
appRouter.use("/api/post", postRouter);
appRouter.use("/api/comment", commentRouter);

export { appRouter };
