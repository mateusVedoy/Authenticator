import { IMiddleware } from "../../app/ports/middleware/IMiddleware";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const SECRET = process.env.JWTTOKEN || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";

class RequestIntercepter implements IMiddleware {

    public async intercept(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { authorization } = req.headers;
        if (!authorization) return res.status(401).send();
        const [, token] = authorization.split(" ");
        jwt.verify(token, SECRET, (err) => {
            if (err) return res.status(401).send({ "Message:": err.message });
            else next();
        });
    }
}

export const requestIntercepter = new RequestIntercepter();