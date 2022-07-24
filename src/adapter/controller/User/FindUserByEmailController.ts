import { IController } from "../../../app/ports/adapter/controller/IController";
import { IFindUserByUsername } from "../../../app/ports/useCase/IFindUserByEmail";
import { User } from "../../../domain/entity/User";
import { Request, Response } from "express";

export class FindUserByUsernameController implements IController {

   private FindUserByUsernameService: IFindUserByUsername;

   public constructor(findUserByUsernameService: IFindUserByUsername) {
      this.FindUserByUsernameService = findUserByUsernameService;
   }

   public handle(req: Request, res: Response): Response<Response<User>> {
      const { username } = req.params;
      try {
         const user = this.FindUserByUsernameService.findByUsername(username);
         return res.send({ "User": user }).status(200);
      } catch (error) {
         return res.send().status(400);
      }
   }
}