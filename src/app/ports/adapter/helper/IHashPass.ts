
export interface IHashPass {
    hash(planTextPass: string): Promise<string>;
}