export interface IAuthValidation {
    validate(token: string): Promise<Boolean>;
}