import express = require("express");
import { AuthController } from "../controller/auth";

const authRouter: express.Router = express.Router();

authRouter.use("/login", AuthController.login);
authRouter.use("/register", AuthController.register);
authRouter.use("/checkLogin", AuthController.checkLogin);

export { authRouter };
