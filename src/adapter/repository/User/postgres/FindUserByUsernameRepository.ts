import { PGClient } from "../../../../adapter/database/db/postgres/Client";
import { IFindUserRepository } from "app/ports/adapter/repository/IFindAllUsersRepository";

export class FindUserByUsernameRepository implements IFindUserRepository {
    public async find(username: string): Promise<any> {
        try {
            const { rows } = await PGClient.query(`select * from usuario where usu_username = '${username}'`);
            return rows;
        } catch (error) {

        }
    }

}