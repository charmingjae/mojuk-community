import express = require("express");
import { DataController } from "../controller/data";

const dataRouter: express.Router = express.Router();

dataRouter.use("/getUserInfo", DataController.getUserInfo);

export { dataRouter };
