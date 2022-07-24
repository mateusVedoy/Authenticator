import { ICreateUserRepository } from "../../../../app/ports/adapter/repository/ICreateUserRepository";
import { User } from "../../../../domain/entity/User";
import { Users } from "../../../database/in-memory/Users";

export class CreateUserRepository implements ICreateUserRepository {
    public async create(user: User): Promise<Object> {
        return new Promise((resolve, rejected) => {
            const isUserCreated = Users.push(user);
            if (isUserCreated) {
                resolve("User has been created successfully");
            } else {
                rejected("Action not scheduled");
            }
        });
    }
}

