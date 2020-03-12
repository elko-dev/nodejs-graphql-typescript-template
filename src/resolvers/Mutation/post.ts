import { MutationCreateUserArgs } from '../../graphql/generated';
import { User } from '../../models/User';
export const post = {
  async createUser(_, args: MutationCreateUserArgs) {
    const newUser: User = new User();
    newUser.id = 1;
    newUser.firstName = args.firstName;
    newUser.lastName = args.lastName;
    newUser.email = args.email;
    newUser.phoneNumber = args.phoneNumber;
    return newUser;
  }
};
