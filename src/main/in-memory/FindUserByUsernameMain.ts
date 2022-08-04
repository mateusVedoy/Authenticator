import { FindAllUsersRepository } from "../../adapter/repository/User/in-memory/FindAllUsersRepository";
import { FindUserByUsernameService } from "../../app/useCase/find-user/FindUserByUsernameService";
import { FindUserByUsernameController } from "../../adapter/controller/User/FindUserByEmailController";

const findAllUsersRepo = new FindAllUsersRepository();
const findUserByEmailService = new FindUserByUsernameService(findAllUsersRepo);
const findUserByEmailController = new FindUserByUsernameController(findUserByEmailService);

export { findUserByEmailController };