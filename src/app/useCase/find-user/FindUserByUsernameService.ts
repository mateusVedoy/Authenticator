import { IFindAllUsersRepository } from "../../ports/adapter/repository/IFindAllUsersRepository";
import { IFindUserByUsername } from "../../ports/useCase/IFindUserByEmail";
import { User } from "../../../domain/entity/User";

export class FindUserByUsernameService implements IFindUserByUsername {

    private FindAllUsersRepository: IFindAllUsersRepository;

    public constructor(findAllUsersRepository: IFindAllUsersRepository) {
        this.FindAllUsersRepository = findAllUsersRepository;
    }

    public async findByUsername(username: string): Promise<User | []> {
        try {
            const user = await this.FindAllUsersRepository.find(username);
            return user || [];
        } catch (error) {
            throw error;
        }
    }
}