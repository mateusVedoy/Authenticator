export interface IAuthentication {
    authenticate(username: string, email: string, password: string): Promise<string>;
}