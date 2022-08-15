import { CreateUserService } from "../../src/app/useCase/create-user/CreateUserService";
import { BcryptJsPassHash } from "../../src/adapter/helper/BcryptJsPassHash";
import { CreateUserRepository } from "../../src/adapter/repository/User/postgres/CreateUserRepository";

jest.mock("../../src/adapter/helper/BcryptJsPassHash");
jest.mock("../../src/adapter/database/in-memory/Users");
jest.mock("../../src/adapter/database/db/postgres/Client");

const createUserRepositoryMock = CreateUserRepository as jest.Mock<CreateUserRepository>;
const hashPassMock = BcryptJsPassHash as jest.Mock<BcryptJsPassHash>;

const createUserRepositoryMocked = new createUserRepositoryMock() as jest.Mocked<CreateUserRepository>;
const hashPassMocked = new hashPassMock() as jest.Mocked<BcryptJsPassHash>;

const spyRepo = jest.spyOn(createUserRepositoryMocked, 'create');

const createUser = new CreateUserService(createUserRepositoryMocked, hashPassMocked);

describe("Create User use case", () => {

    let user: string;

    beforeEach(async () => {
        user = await createUser.create('mgoes', 'mgoes@umov.me', '123456');
    });

    it("should return a success message when user has been created successfully",  () => {
        expect(user).toBe("User has been created successfully");
    });

    it("should call CreateUserRepository class once", () => {
        expect(spyRepo).toHaveBeenCalledTimes(1);
    });
});