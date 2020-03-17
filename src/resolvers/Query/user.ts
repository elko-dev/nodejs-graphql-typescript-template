import { UserResponse, QueryGetUserArgs, User, Error } from "../../graphql/generated";
import UserService from "../../service/user.service";
import FirebaseAuth from "../../auth/firebase.auth";

export const get = {
    async getUser(_, args: QueryGetUserArgs): Promise<UserResponse> {
        try {
            const userService: UserService = new UserService(new FirebaseAuth());

            const user: User | undefined = await userService.getUser(args);
            return {
                errors: [],
                user: user
            };

        }
        catch (error) {
            console.log(error);
            const resposeError: Error = createError(error);
            return {
                errors: [resposeError],
                user: null
            };
        }
    }
};

function createError(error: any): Error {
    return {
        message: error
    };
}
