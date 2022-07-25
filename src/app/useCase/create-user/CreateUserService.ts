import { IHashPass } from "app/ports/adapter/helper/IHashPass";
import { ICreateUserRepository } from "../../../app/ports/adapter/repository/ICreateUserRepository";
import { ICreateUser } from "../../../app/ports/useCase/ICreateUser";
import { User } from "../../../domain/entity/User";

export class CreateUserService implements ICreateUser {

    private CreateUserRepository: ICreateUserRepository;
    private HashUserPass: IHashPass;

    public constructor(createUserRepository: ICreateUserRepository, hashUserPass: IHashPass) {
        this.CreateUserRepository = createUserRepository;
        this.HashUserPass = hashUserPass;
    }

    public async create(username: string, email: string, password: string): Promise<string> {
        try {
            const hashedPass = await this.hashUserPassword(password);
            const user = new User(username, email, hashedPass);
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

    private async hashUserPassword(pass: string): Promise<string> {
        return await this.HashUserPass.hash(pass);
    }
}