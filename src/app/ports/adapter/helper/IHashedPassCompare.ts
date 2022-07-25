export interface IHashedPassCompare {
    compare(pass: string, hashedPass: string): Promise<Boolean>;
}