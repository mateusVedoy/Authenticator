import { IController } from "../../../app/ports/adapter/controller/IController";
import { IAuthentication } from "../../../app/ports/useCase/IAuthentication";
import { Request, Response } from "express";

export class AuthenticationController implements IController {

    private AuthenticationService: IAuthentication;

    public constructor(auth: IAuthentication) {
        this.AuthenticationService = auth;
    }

    public async handle(req: Request, res: Response): Promise<Response<string>> {
        const { username, email, password } = req.body;
        try {
            const token = await this.AuthenticationService.authenticate(username, email, password);
            return res.send({ "Access Token:": token });
        } catch (error) {
            return res.status(400).send({ "Message:": error });
        }
    }

}