
export interface IFindUserRepository {
    find(username: string): Promise<any>;
}