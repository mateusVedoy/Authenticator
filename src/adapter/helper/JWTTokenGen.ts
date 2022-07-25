import { ITokenGen } from "app/ports/adapter/helper/ITokenGen";
import { User } from "domain/entity/User";
import jwt from "jsonwebtoken";
const SECRET = process.env.JWTSECRET || "$1$YhiQ/w2L$mmtX.mrwAEARiZOM4C/S00"

export class JWTTokenGen implements ITokenGen{
    generate(user: User): string {
        return jwt.sign({
            username: user.getUsername(),
            email: user.getEmail(),
            pass: user.getPassword()
        }, 
        SECRET,
        {
            expiresIn: "10 minutes"
        });
    }
}