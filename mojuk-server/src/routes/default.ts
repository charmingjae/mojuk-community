import express = require("express");
import { DefaultController } from "../controller/default";

const defaultRouter: express.Router = express.Router();

defaultRouter.use("/main", DefaultController.main);
defaultRouter.use("/test", DefaultController.test);

export { defaultRouter };
