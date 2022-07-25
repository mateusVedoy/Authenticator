import { User } from "../../../../domain/entity/User";

export interface ITokenGen {
    generate(user: User): string;
}