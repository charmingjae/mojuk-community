import express = require("express");
import { DataController } from "../controller/data";

const dataRouter: express.Router = express.Router();

dataRouter.use("/getUserInfo", DataController.getUserInfo);
dataRouter.use("/getUserPaper", DataController.getUserPaper);
dataRouter.use("/getUserInfoByName", DataController.getUserInfoByName);

export { dataRouter };
