import { FindUserByUsernameRepository } from "../../adapter/repository/User/postgres/FindUserByUsernameRepository";
import { FindUserByUsernameService } from "../../app/useCase/find-user/FindUserByUsernameService";
import { FindUserByUsernameController } from "../../adapter/controller/User/FindUserByEmailController";

const findAllUsersRepo = new FindUserByUsernameRepository();
const findUserByEmailService = new FindUserByUsernameService(findAllUsersRepo);
const findUserByUsernameController = new FindUserByUsernameController(findUserByEmailService);

export { findUserByUsernameController };