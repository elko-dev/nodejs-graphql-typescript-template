import { MutationCreateUserArgs } from '../../graphql/generated';
import { UserEntity } from '../../models/user.entity';
import UserService from '../../service/user.service';
export const post = {
  async createUser(_, args: MutationCreateUserArgs): Promise<UserEntity> {
    const userService: UserService = new UserService();

    return userService.createUser(args);
  }
};
