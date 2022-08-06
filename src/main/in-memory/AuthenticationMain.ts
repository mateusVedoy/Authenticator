import { FindUserByUsernameRepository } from "../../adapter/repository/User/in-memory/FindUserByUsernameRepository";
import { AuthenticationUserRepository } from "../../adapter/repository/User/in-memory/AuthenticationRepository";
import { FindUserByUsernameService } from "../../app/useCase/find-user/FindUserByUsernameService";
import { AuthenticationController } from "../../adapter/controller/Authentication/AuthenticationController";
import { Authentication } from "../../app/useCase/authenticate/Authentication";
import { JWTTokenGen } from "../../adapter/helper/JWTTokenGen";
import { BcryptJsPassCompare } from "../../adapter/helper/BryptJsPassCompare";

const findUserByUsernameRepository = new FindUserByUsernameRepository();
const jwtTokenGen = new JWTTokenGen();
const bcryptjs = new BcryptJsPassCompare();
const authUserRepo = new AuthenticationUserRepository(bcryptjs)
const findUserByUsernameService = new FindUserByUsernameService(findUserByUsernameRepository)
const authenticationService = new Authentication(findUserByUsernameService, jwtTokenGen, authUserRepo);
const authenticationControl = new AuthenticationController(authenticationService);

export {
    authenticationControl
}