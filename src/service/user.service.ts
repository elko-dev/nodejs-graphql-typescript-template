import { User } from "../models/user.entity";
import { MutationCreateUserArgs } from "../graphql/generated";
import { getRepository, Repository } from "typeorm";

export default class UserService {
    private repo: Repository<User> = getRepository(User);
    
    public async createUser(args: MutationCreateUserArgs): Promise<User> {
        const { firstName, lastName, email, phoneNumber } = args;

        const user: User = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phoneNumber = phoneNumber;

        return this.repo.save(user);
    }
}