import { IController } from "../../../app/ports/adapter/controller/IController";
import { ICreateUser } from "../../../app/ports/useCase/ICreateUser";
import { Request, Response } from "express";

export class CreateUserController implements IController {

    private CreateUserService: ICreateUser;

    public constructor(createUserService: ICreateUser) {
        this.CreateUserService = createUserService;
    }

    public async handle(req: Request, res: Response): Promise<Response<string>> {
        try {
            const { username, email, password } = req.body;
            const msg = await this.CreateUserService.create(username, email, password);
            return res.status(201).send({ "Message:": msg });
        } catch (error) {
            return res.send({ "Error:": error }).status(400);
        }
    }

}