import { Router, Request, Response } from "express";
import { userRouter } from "./User/UserRoute";

export const mainRouter = Router();

mainRouter.use("/user", userRouter);

mainRouter.get("/private", (req: Request, res: Response) => {
    return res.json({"Message:":"You're allowed to access this route!"});
});