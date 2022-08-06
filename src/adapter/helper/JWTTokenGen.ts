import { ITokenGen } from "../../app/ports/adapter/helper/ITokenGen";
import { User } from "../../domain/entity/User";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00";

export class JWTTokenGenInMem implements ITokenGen{
    generate(user: User): string {
        return jwt.sign({
            username: user.getUsername(),
            email: user.getEmail(),
            pass: user.getPassword()
        }, 
        SECRET,
        {
            expiresIn: "2 minutes"
        });
    }
}

export class JWTTokenGenDB implements ITokenGen{
    generate(user): string {
        return jwt.sign({
            username: user.usu_username,
            email: user.usu_email,
            pass: user.usu_senhacriptografada
        }, 
        SECRET,
        {
            expiresIn: "2 minutes"
        });
    }
}