import { User } from "../../../../domain/entity/User";

export interface ICreateUserRepository {
    create(user: User): Promise<Object>;
}