import { Router } from "express";
import { Request, Response } from "express";

import { PGClient } from "../../database/db/postgres/Client";
import { createUserController } from "../../../main/postgres/CreateUserMain";
import { findUserByUsernameController } from "../../../main/postgres/FindUserByUsernameMain";
import { authenticationController } from "../../../main/postgres/AuthenticationMain";

export const userRouterDB = Router();

//postgres
PGClient.connect().then(() => {
    userRouterDB.post("/user/create", (req: Request, res: Response) => createUserController.handle(req, res)); 
    userRouterDB.get("/user/find/byUsername/:username", (req: Request, res: Response) => findUserByUsernameController.handle(req, res));
    userRouterDB.post("/auth", (req: Request, res: Response) => authenticationController.handle(req, res));
});