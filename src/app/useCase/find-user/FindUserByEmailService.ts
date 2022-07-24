import { IFindAllUsersRepository } from "../../../app/ports/adapter/repository/IFindAllUsersRepository";
import { IFindUserByUsername } from "../../../app/ports/useCase/IFindUserByEmail";
import { User } from "../../../domain/entity/User";

export class FindUserByUsernameService implements IFindUserByUsername {

    private FindAllUsersRepository: IFindAllUsersRepository;

    public constructor(findAllUsersRepository: IFindAllUsersRepository) {
        this.FindAllUsersRepository = findAllUsersRepository;
    }

    public findByUsername(username: string): User {
        try {
            const user = this.FindAllUsersRepository.findAll().find(usr => usr.getUsername() == username);
            return user;
        } catch (error) {
            throw error;
        }
    }
}