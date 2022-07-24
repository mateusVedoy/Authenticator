import { Router } from "express";
import { userRouter } from "./User/UserRoute";

export const mainRouter = Router();

mainRouter.use("/user", userRouter);