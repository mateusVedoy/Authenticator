import { FindUserByUsernameRepository } from "../../adapter/repository/User/in-memory/FindUserByUsernameRepository";
import { FindUserByUsernameService } from "../../app/useCase/find-user/FindUserByUsernameService";
import { AuthenticationController } from "../../adapter/controller/Authentication/AuthenticationController";
import { Authentication } from "../../app/useCase/authenticate/Authentication";
import { JWTTokenGen } from "../../adapter/helper/JWTTokenGen";
import { BcryptJsPassCompare } from "../../adapter/helper/BryptJsPassCompare";

const findUserByUsernameRepository = new FindUserByUsernameRepository();
const findUserByUsernameService = new FindUserByUsernameService(findUserByUsernameRepository)
const jwtTokenGen = new JWTTokenGen();
const bcryptjs = new BcryptJsPassCompare();
const authenticationService = new Authentication(findUserByUsernameService, jwtTokenGen, bcryptjs);
const authenticationControl = new AuthenticationController(authenticationService);

export {
    authenticationControl
}