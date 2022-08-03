import { CreateUserRepository } from "../../adapter/repository/User/postgres/CreateUserRepository";
import { CreateUserService } from "../../app/useCase/create-user/CreateUserService";
import { CreateUserController } from "../../adapter/controller/User/CreateUserController";
import { BcryptJsPassHash } from "../../adapter/helper/BcryptJsPassHash";

const createUserRepo = new CreateUserRepository();
const bcryptJsPassHash = new BcryptJsPassHash();
const createUserService = new CreateUserService(createUserRepo, bcryptJsPassHash);
const createUserController = new CreateUserController(createUserService);

export {
    createUserController
} 