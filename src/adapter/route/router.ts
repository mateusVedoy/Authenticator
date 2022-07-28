import { Router, Request, Response } from "express";
import { authRoute } from "./Authentication/AuthRoute";
import { userRouter } from "./User/UserRoute";
import { requestIntercepter } from "../../main/in-memory/AuthenticationMain";

export const mainRouter = Router();


mainRouter.use("/user", userRouter);
mainRouter.use("/auth", authRoute);

mainRouter.get("/private",requestIntercepter.intercept, (req: Request, res: Response) => {
    return res.json({"Message:":"You're allowed to access this route!"});
});