import { User } from "./../../../../domain/entity/User";

export interface IFindAllUsersRepository {
    findAll(): User[];
}