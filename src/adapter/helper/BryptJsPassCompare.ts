import { IHashedPassCompare } from "../../app/ports/adapter/helper/IHashedPassCompare";
import bcryptjs from "bcryptjs"

export class BcryptJsPassCompare implements IHashedPassCompare {
    public async compare(pass: string, hashedPass: string): Promise<Boolean> {
        return await bcryptjs.compare(pass, hashedPass);
    }
}