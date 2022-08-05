import { IFindUserRepository } from "../../ports/adapter/repository/IFindAllUsersRepository";
import { IFindUserByUsername } from "../../ports/useCase/IFindUserByUsername";
import { User } from "../../../domain/entity/User";

export class FindUserByUsernameService implements IFindUserByUsername {

    private FindUserByUsernameRepository: IFindUserRepository;

    public constructor(findAllUsersRepository: IFindUserRepository) {
        this.FindUserByUsernameRepository = findAllUsersRepository;
    }

    public async findByUsername(username: string): Promise<User> {
        try {
            const user = await this.FindUserByUsernameRepository.find(username);
            return user;
        } catch (error) {
            throw error;
        }
    }
}