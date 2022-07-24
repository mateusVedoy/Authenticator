import { ICreateUserRepository } from "../../../../app/ports/adapter/repository/ICreateUserRepository";
import { User } from "../../../../domain/entity/User";
import { PGClient } from "adapter/database/db/postgres/Client";

export class CreateUserRepository implements ICreateUserRepository {
    public async create(user: User): Promise<string> {
        try {
            await PGClient.query(`insert into usuario(usu_nomeCompleto, usu_email, usu_senhacripto) values(${user.getUsername}, ${user.getEmail}, ${user.getPassword})`);
            return "User has been created successfully";
        } catch (error) {
            throw error;
        }
    }
}