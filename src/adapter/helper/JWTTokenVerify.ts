import { ITokenVerify } from "../../app/ports/adapter/helper/ITokenVerify";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWTTOKEN || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";

export class JWTTokenVerify implements ITokenVerify {
    verify(token: string): void {
        jwt.verify(token, SECRET, (err) => {
            if(err) return false;
            else return true;
        });
    }

}