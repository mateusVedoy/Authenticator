import { Users } from "../../../../adapter/database/in-memory/Users";
import { IFindAllUsersRepository } from "../../../../app/ports/adapter/repository/IFindAllUsersRepository";
import { User } from "../../../../domain/entity/User";

export class FindAllUsersRepository implements IFindAllUsersRepository {
    public async findAll(): Promise<User[]> {
        return new Promise((resolve, _) => {
            if(Users == [] || Users != []){
                resolve(Users);
            }
        });
    }
}