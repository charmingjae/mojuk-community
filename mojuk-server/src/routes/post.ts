import express = require("express");
import { PostController } from "../controller/post";

const postRouter: express.Router = express.Router();

postRouter.use("/delete", PostController.deletePost);
postRouter.use("/update", PostController.updatePost);
postRouter.use("/:postId", PostController.getPost);

export { postRouter };
