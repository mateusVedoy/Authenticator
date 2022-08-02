import { Users } from "../../../../adapter/database/in-memory/Users";
import { IFindAllUsersRepository } from "../../../../app/ports/adapter/repository/IFindAllUsersRepository";
import { User } from "../../../../domain/entity/User";

export class FindAllUsersRepository implements IFindAllUsersRepository {
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