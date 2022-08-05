import { Router, Request, Response } from "express";
import { userRouterMem } from "./in-memory/UserRoute";
import { requestIntercepter } from "../middleware/RequestIntercepter";
import { userRouterDB } from "./db/UserRouteDB";

export const mainRouter = Router();


mainRouter.use("/in-memory", userRouterMem);
mainRouter.use("/postgres", userRouterDB);

mainRouter.get("/private",requestIntercepter.intercept, (req: Request, res: Response) => {
    return res.json({"Message:":"You're allowed to access this route!"});
});