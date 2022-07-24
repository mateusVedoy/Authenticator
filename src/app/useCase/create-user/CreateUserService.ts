import { ICreateUserRepository } from "../../../app/ports/adapter/repository/ICreateUserRepository";
import { ICreateUser } from "../../../app/ports/useCase/ICreateUser";
import { User } from "../../../domain/entity/User";

export class CreateUserService implements ICreateUser {

    private CreateUserRepository: ICreateUserRepository;

    public constructor(createUserRepository: ICreateUserRepository) {
        this.CreateUserRepository = createUserRepository;
    }

    public async create(username: string, email: string, password: string): Promise<string> {
        try {
            const user = new User(username, email, password);
            return await this.sendCreatedUserToRepository(user);
        } catch (error) {
            throw error;
        }
    }

    private async sendCreatedUserToRepository(user: User): Promise<string> {
        try {
            const res = await this.CreateUserRepository.create(user);
            return res.toString();
        } catch (error) {
            throw error;
        }
    }
}