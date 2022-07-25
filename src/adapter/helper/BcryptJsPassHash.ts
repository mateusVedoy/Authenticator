import { IHashPass } from "../../app/ports/adapter/helper/IHashPass";
import bcryptjs from "bcryptjs"

export class BcryptJsPassHash implements IHashPass {
    public async hash(planTextPass: string): Promise<string> {
        const salt = await bcryptjs.genSalt(10);
        return bcryptjs.hash(planTextPass, salt);
    }
}