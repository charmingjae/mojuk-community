import express = require("express");
import { CommentController } from "../controller/comment";

const commentRouter: express.Router = express.Router();

commentRouter.use("/register", CommentController.register);
commentRouter.use("/get", CommentController.get);

export { commentRouter };
