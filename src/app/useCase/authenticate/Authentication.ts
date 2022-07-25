import { IHashedPassCompare } from "../../../app/ports/adapter/helper/IHashedPassCompare";
import { ITokenGen } from "../../../app/ports/adapter/helper/ITokenGen";
import { IFindUserByUsername } from "../../../app/ports/useCase/IFindUserByEmail";
import { IAuthentication } from "../../../app/ports/useCase/IAuthentication";
import { User } from "../../../domain/entity/User";

export class Authentication implements IAuthentication {

    private FindUserByUsernameService: IFindUserByUsername;
    private TokenGen: ITokenGen;
    private PassHashCompare: IHashedPassCompare;

    public constructor(findUserByUsernameService: IFindUserByUsername, tokenGen: ITokenGen, passHashCompare: IHashedPassCompare){
        this.FindUserByUsernameService = findUserByUsernameService;
        this.TokenGen = tokenGen;
        this.PassHashCompare = passHashCompare
    }

    public async authenticate(username: string, email: string, password: string): Promise<string> {
        const usr = await this.verifyUser(username);
        if(usr){
            const isPassValid = await this.compareUserPass(password, usr.getPassword());
            const isEmailValid = this.compareUserEmail(email, usr.getEmail());
            if(isEmailValid && isPassValid){
                return this.TokenGen.generate(usr);
            }else{
                return "Invalid credentials";
            }
        }else{
            return "Invalid credentials";
        }
    }

    private async verifyUser(username: string): Promise<User> {
        return await this.FindUserByUsernameService.findByUsername(username);
    }

    private async compareUserPass(pass: string, hashedPass: string): Promise<Boolean> {
        return await this.PassHashCompare.compare(pass, hashedPass);
    }

    private compareUserEmail(sent: string, received: string): Boolean {
        return sent === received;
    }
}