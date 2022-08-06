export interface IAuthenticationUserRepository {
    authenticate(user, pass: string, email: string): Promise<Boolean>
}