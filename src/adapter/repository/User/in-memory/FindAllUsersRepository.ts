import { Users } from "../../../../adapter/database/in-memory/Users";
import { IFindUserRepository } from "../../../../app/ports/adapter/repository/IFindAllUsersRepository";
import { User } from "../../../../domain/entity/User";

export class FindAllUsersRepository implements IFindUserRepository {
    public async find(username: string): Promise<User> {
        return new Promise((resolve, reject) => {
            if (Users) {
                resolve(Users.find(usr => usr.getUsername() == username));
            }else{
                reject("Data not found");
            }
        });
    }
}