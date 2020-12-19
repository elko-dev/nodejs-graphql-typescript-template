
export const postPushNotification = {
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

};

function createError(error: any): Error {
  return {
    message: error
  };
}
