import { NextFunction, Request, Response } from "express";

export interface IMiddleware{
    intercept(req: Request, res: Response, next:NextFunction): Promise<Response>;
}