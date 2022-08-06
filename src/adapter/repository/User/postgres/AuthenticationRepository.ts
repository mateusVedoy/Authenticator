import { IHashedPassCompare } from "../../../../app/ports/adapter/helper/IHashedPassCompare";
import { IAuthenticationUserRepository } from "../../../../app/ports/adapter/repository/IAuthenticationUserRepository";

export class AuthenticationUserRepository implements IAuthenticationUserRepository {

    private PassHashCompare: IHashedPassCompare;

    public constructor(passHashCompare: IHashedPassCompare) {
        this.PassHashCompare = passHashCompare
    }

    public async authenticate(user: any, pass: string, email: string): Promise<Boolean> {
        
        const [usr,] = user;
        const isPassValid = await this.compareUserPass(pass, usr.usu_senhacriptografada);
        const isEmailValid = this.compareUserEmail(email, usr.usu_email);
        return new Promise((resolve, rejected) => {
            if (isEmailValid && isPassValid) {
                resolve(true);
            } else {
                rejected(false);
            }
        });
    }

    private async compareUserPass(pass: string, hashedPass: string): Promise<Boolean> {
        return await this.PassHashCompare.compare(pass, hashedPass);
    }

    private compareUserEmail(sent: string, received: string): Boolean {
        return sent === received;
    }
}