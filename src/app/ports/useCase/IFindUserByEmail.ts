import { User } from "../../../domain/entity/User";

export interface IFindUserByUsername {
    findByUsername(email: string): User;
}