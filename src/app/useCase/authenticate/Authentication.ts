import { ITokenGen } from "../../../app/ports/adapter/helper/ITokenGen";
import { IFindUserByUsername } from "../../ports/useCase/IFindUserByUsername";
import { IAuthentication } from "../../../app/ports/useCase/IAuthentication";
import { User } from "../../../domain/entity/User";
import { IAuthenticationUserRepository } from "../../../app/ports/adapter/repository/IAuthenticationUserRepository";

export class Authentication implements IAuthentication {

    private FindUserByUsernameService: IFindUserByUsername;
    private TokenGen: ITokenGen;
    private AuthUSerRepo: IAuthenticationUserRepository;

    public constructor(findUserByUsernameService: IFindUserByUsername, tokenGen: ITokenGen, authUserRepo: IAuthenticationUserRepository) {
        this.FindUserByUsernameService = findUserByUsernameService;
        this.TokenGen = tokenGen;
        this.AuthUSerRepo = authUserRepo;
    }

    public async authenticate(username: string, email: string, password: string): Promise<string> {
        try {
            const usr = await this.verifyUser(username);
            if (usr) {
                const isAuthValid = await this.AuthUSerRepo.authenticate(usr, password, email);
                if (isAuthValid) {
                    return this.TokenGen.generate(usr);
                }
            } else {
                return "User not found";
            }
        } catch (error) {
            throw "Invalid credentials"
        }
    }

    //permanece
    private async verifyUser(username: string): Promise<User> {
        return await this.FindUserByUsernameService.findByUsername(username);
    }
}