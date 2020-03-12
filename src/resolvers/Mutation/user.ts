import { MutationCreateUserArgs } from '../../graphql/generated';
import { User } from '../../models/user.entity';
import UserService from '../../service/user.service';
export const post = {
  async createUser(_, args: MutationCreateUserArgs): Promise<User> {
    const userService: UserService = new UserService();

    return userService.createUser(args);
  }
};
