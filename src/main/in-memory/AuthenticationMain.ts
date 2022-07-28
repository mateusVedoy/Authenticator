import { FindAllUsersRepository } from "../../adapter/repository/User/in-memory/FindAllUsersRepository";
import { FindUserByUsernameService } from "../../app/useCase/find-user/FindUserByUsernameService";
import { AuthenticationController } from "../../adapter/controller/Authentication/AuthenticationController";
import { Authentication } from "../../app/useCase/authenticate/Authentication";
import { JWTTokenGen } from "../../adapter/helper/JWTTokenGen";
import { BcryptJsPassCompare } from "../../adapter/helper/BryptJsPassCompare";
import { RequestIntercepter } from "../../adapter/middleware/RequestIntercepter";

const findAllUsersRepository = new FindAllUsersRepository();
const findUserByUsernameService = new FindUserByUsernameService(findAllUsersRepository)
const jwtTokenGen = new JWTTokenGen();
const bcryptjs = new BcryptJsPassCompare();
const authenticationService = new Authentication(findUserByUsernameService, jwtTokenGen, bcryptjs);
const authenticationControl = new AuthenticationController(authenticationService);
const requestIntercepter = new RequestIntercepter();

export {
    authenticationControl,
    requestIntercepter
}