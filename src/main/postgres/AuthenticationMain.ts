import { FindUserByUsernameRepository } from "../../adapter/repository/User/postgres/FindUserByUsernameRepository";
import { AuthenticationUserRepository } from "../../adapter/repository/User/in-memory/AuthenticationRepository";
import { FindUserByUsernameService } from "../../app/useCase/find-user/FindUserByUsernameService";
import { AuthenticationController } from "../../adapter/controller/Authentication/AuthenticationController";
import { Authentication } from "../../app/useCase/authenticate/Authentication";
import { JWTTokenGen } from "../../adapter/helper/JWTTokenGen";
import { BcryptJsPassCompare } from "../../adapter/helper/BryptJsPassCompare";

const bcryptJSPassCompare = new BcryptJsPassCompare();
const findUserByUsernameRepository = new FindUserByUsernameRepository();
const authUserRepo = new AuthenticationUserRepository(bcryptJSPassCompare)
const findUserByUsernameService = new FindUserByUsernameService(findUserByUsernameRepository)
const jwtTokenGen = new JWTTokenGen();
const authenticationService = new Authentication(findUserByUsernameService, jwtTokenGen, authUserRepo);
const authenticationController = new AuthenticationController(authenticationService);

export {
    authenticationController
}