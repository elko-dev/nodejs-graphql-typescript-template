import { UserEntity } from "../models/user.entity";
import { MutationCreateUserArgs, QueryGetUserArgs, User } from "../graphql/generated";
import { getRepository, Repository } from "typeorm";

export default class UserService {
    private repo: Repository<UserEntity> = getRepository(UserEntity);

    public async createUser(args: MutationCreateUserArgs): Promise<UserEntity> {
        const { firstName, lastName, email, phoneNumber } = args;

        const user: UserEntity = new UserEntity();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phoneNumber = phoneNumber;

        return this.repo.save(user);
    }

    public async getUser(args: QueryGetUserArgs): Promise<User> {
        const user: UserEntity | undefined = await this.repo.findOne(args.id);

        if (user) {
            const userResponse: User = {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                id: String(user.id),
                phoneNumber: user.phoneNumber
            };
            return userResponse;
        }
        return Promise.reject("Not Found");
    }
}