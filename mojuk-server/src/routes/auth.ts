import express = require("express");
import { AuthController } from "../controller/auth";

const authRouter: express.Router = express.Router();

// authRouter.use("/login", AuthController.login);

export { authRouter };
