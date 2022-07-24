import { IFindAllUsersRepository } from "../../../app/ports/adapter/repository/IFindAllUsersRepository";
import { IFindUserByUsername } from "../../../app/ports/useCase/IFindUserByEmail";
import { User } from "../../../domain/entity/User";

export class FindUserByUsernameService implements IFindUserByUsername {

    private FindAllUsersRepository: IFindAllUsersRepository;

    public constructor(findAllUsersRepository: IFindAllUsersRepository) {
        this.FindAllUsersRepository = findAllUsersRepository;
    }

    public async findByUsername(username: string): Promise<User> {
        try {
            const user = (await this.listAllUsers()).find(usr => usr.getUsername() == username);
            return user;
        } catch (error) {
            throw error;
        }
    }

    private async listAllUsers(): Promise<User[]> {
        try {
            return await this.FindAllUsersRepository.findAll();
        } catch (error) {
            throw error;
        }
    }
}