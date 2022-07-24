import { CreateUserRepository } from "../../adapter/repository/User/in-memory/CreateUserRepository";
import { CreateUserService } from "../../app/useCase/create-user/CreateUserService";
import { CreateUserController } from "../../adapter/controller/User/CreateUserController";

const createUserRepo = new CreateUserRepository();
const createUserService = new CreateUserService(createUserRepo);
const createUserControl = new CreateUserController(createUserService);

export {
    createUserControl
} 