import { Router } from "express";
import { Request, Response } from "express";

import { PGClient } from "../../../adapter/database/db/postgres/Client";
import { createUserController } from "../../../main/postgres/CreateUserMain";
import { createUserControl } from "../../../main/in-memory/CreateUserMain";
import { findUserByEmailController } from "../../../main/in-memory/FindUserByUsernameMain";
import { findUserByUsernameController } from "../../../main/postgres/FindUserByUsernameMain";

export const userRouter = Router();

//in-memory
userRouter.post("/in-memory/create", (req: Request, res: Response) => createUserControl.handle(req, res));
userRouter.get("/in-memory/find/byUsername/:username", (req: Request, res: Response) => findUserByEmailController.handle(req, res));

//postgres
PGClient.connect().then(() => { 
    userRouter.post("/postgres/create", (req: Request, res: Response) => createUserController.handle(req, res)); 
    userRouter.get("/postgres/find/byUsername/:username", (req: Request, res: Response) => findUserByUsernameController.handle(req, res));
}).finally(() => {
    PGClient.end();
});