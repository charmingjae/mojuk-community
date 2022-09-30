import express = require("express");
import { PostController } from "../controller/post";

const postRouter: express.Router = express.Router();

postRouter.use("/:postId", PostController.getPost);

export { postRouter };
