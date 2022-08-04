import { IFindUserRepository } from "../../ports/adapter/repository/IFindAllUsersRepository";
import { IFindUserByUsername } from "../../ports/useCase/IFindUserByUsername";
import { User } from "../../../domain/entity/User";

export class FindUserByUsernameService implements IFindUserByUsername {

    private FindAllUsersRepository: IFindUserRepository;

    public constructor(findAllUsersRepository: IFindUserRepository) {
        this.FindAllUsersRepository = findAllUsersRepository;
    }

    public async findByUsername(username: string): Promise<User> {
        try {
            const user = await this.FindAllUsersRepository.find(username);
            return user;
        } catch (error) {
            throw error;
        }
    }
}