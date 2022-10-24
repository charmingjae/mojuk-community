import express = require("express");
import { PaperController } from "../controller/paper";

const paperRouter: express.Router = express.Router();

paperRouter.use("/post", PaperController.post);
paperRouter.use("/get", PaperController.get);

export { paperRouter };
