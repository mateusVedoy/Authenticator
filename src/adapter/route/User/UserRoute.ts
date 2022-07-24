import { Router } from "express";
import { Request, Response } from "express";

import { createUserControl } from "../../../main/in-memory/CreateUserMain";
import { findUserByEmailController } from "../../../main/in-memory/FindUserByEmailMain";

export const userRouter = Router();

userRouter.post("/create", (req: Request, res: Response) => createUserControl.handle(req, res));
userRouter.get("/find/byUsername/:username", (req: Request, res: Response) => findUserByEmailController.handle(req, res));