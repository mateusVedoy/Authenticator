import { request, Router } from "express";
import { Request, Response } from "express";
import { authenticationControl } from "../../../main/in-memory/AuthenticationMain";

export const authRoute = Router();

authRoute.post("/", (req: Request, res: Response) => authenticationControl.handle(req, res));