export interface ICreateUser {
    create(username: string, email: string, password: string): Promise<string>;
}