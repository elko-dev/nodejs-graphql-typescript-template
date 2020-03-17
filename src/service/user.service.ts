import { UserEntity } from "../models/user.entity";
import { QueryGetUserArgs, User, MutationSignUpUserArgs } from "../graphql/generated";
import { getRepository, Repository } from "typeorm";
import { Auth, AuthDetails } from "../auth/auth";

export default class UserService {
    private repo: Repository<UserEntity> = getRepository(UserEntity);
    private auth: Auth;
    constructor(auth: Auth) {
        this.auth = auth;
    }
    public async signUpUser(args: MutationSignUpUserArgs): Promise<User> {
        // create user
        const authUser: AuthDetails = await this.auth.registerUser(args.email, args.password);
        const user: UserEntity = new UserEntity();
        user.authId = String(authUser.id);
        user.email = args.email;
        user.firstName = args.firstName;
        user.lastName = args.lastName;
        user.phoneNumber = args.phoneNumber;
        const newUser: UserEntity = await this.createUser(user);
        return {
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            id: String(newUser.id),
            phoneNumber: newUser.phoneNumber
        };
    }

    public async createUser(user: UserEntity): Promise<UserEntity> {
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