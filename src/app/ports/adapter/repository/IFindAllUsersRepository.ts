import { User } from "./../../../../domain/entity/User";

export interface IFindAllUsersRepository {
    find(username: string): Promise<User>;
}