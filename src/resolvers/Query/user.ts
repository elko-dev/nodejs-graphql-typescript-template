import { UserResponse, QueryGetUserArgs, QueryGetUserByFirebaseIdArgs, User, Error } from "../../graphql/generated";
import UserService from "../../service/user.service";
import FirebaseAuth from "../../auth/firebase.auth";
import {resolveUser} from "../ModelResolvers";

export const get = {
    async getUser(_, args: QueryGetUserArgs): Promise<UserResponse> {
        try {
            const userService: UserService = new UserService(new FirebaseAuth());

            const user: User | undefined = resolveUser(await userService.getUser(args));
            return {
                errors: [],
                user: user
            };

        }
        catch (error) {
            console.log(error);
            const responseError: Error = createError(error);
            return {
                errors: [responseError],
                user: null
            };
        }
    },

    async getUserByFirebaseId(_, args: QueryGetUserByFirebaseIdArgs): Promise<UserResponse> {
        try {
            const userService: UserService = new UserService(new FirebaseAuth());

            const user: User | undefined = resolveUser(await userService.getUserByFirebaseId(args));
            return {
                errors: [],
                user: user
            };

        }
        catch (error) {
            console.log(error);
            const responseError: Error = createError(error);
            return {
                errors: [responseError],
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
