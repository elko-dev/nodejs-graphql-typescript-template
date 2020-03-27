import {
  UserResponse, MutationSignUpUserArgs,
  User, Error, MutationSignUpAuthorizedUserArgs
} from '../../graphql/generated';
import UserService from '../../service/user.service';
import FirebaseAuth from '../../auth/firebase.auth';
export const post = {
  async signUpUser(_, args: MutationSignUpUserArgs): Promise<UserResponse> {
    try {
      const userService: UserService = new UserService(new FirebaseAuth());

      const user: User = await userService.signUpUser(args);
      return {
        user: user,
        errors: []
      };
    }
    catch (error) {
      console.log(error);
      return {
        user: null,
        errors: [createError(error)]
      };
    }
  },

  async signUpAuthorizedUser(_, args: MutationSignUpAuthorizedUserArgs): Promise<UserResponse> {
    try {
      const userService: UserService = new UserService(new FirebaseAuth());

      const user: User = await userService.signUpAuthUser(args);
      return {
        user: user,
        errors: []
      };
    }
    catch (error) {
      console.log(error);
      return {
        user: null,
        errors: [createError(error)]
      };
    }
  }
};

function createError(error: any): Error {
  return {
    message: error
  };
}
