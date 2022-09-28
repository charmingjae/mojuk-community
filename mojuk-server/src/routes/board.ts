import express = require("express");
import { BoardController } from "../controller/board";

const boardRouter: express.Router = express.Router();
boardRouter.use("/post", BoardController.postContent);
boardRouter.use("/get", BoardController.getContent);

export { boardRouter };
