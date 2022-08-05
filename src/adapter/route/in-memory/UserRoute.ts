import { Router } from "express";
import { Request, Response } from "express";

import { createUserControl } from "../../../main/in-memory/CreateUserMain";
import { findUserByEmailController } from "../../../main/in-memory/FindUserByUsernameMain";
import { authenticationControl } from "../../../main/in-memory/AuthenticationMain";

export const userRouterMem = Router();

//in-memory
userRouterMem.post("/user/create", (req: Request, res: Response) => createUserControl.handle(req, res));
userRouterMem.get("/user/find/byUsername/:username", (req: Request, res: Response) => findUserByEmailController.handle(req, res));
userRouterMem.post("/auth", (req: Request, res: Response) => authenticationControl.handle(req, res));
