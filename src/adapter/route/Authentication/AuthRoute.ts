import { Router, Request, Response } from "express";
import { authenticationControl } from "../../../main/in-memory/AuthenticationMain";
import { authenticationController } from "../../../main/postgres/AuthenticationMain";
import { PGClient } from "../../../adapter/database/db/postgres/Client";

export const authRoute = Router();

//in-memory
authRoute.post("/in-memory", (req: Request, res: Response) => authenticationControl.handle(req, res));

//postgres
PGClient.connect().then(() => { 
    authRoute.post("/postgres", (req: Request, res: Response) => authenticationController.handle(req, res));
}).finally(() => {
    PGClient.end();
});