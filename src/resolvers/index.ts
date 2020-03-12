import { post } from './Mutation/user';

export default {
  Query: {

  },
  Mutation: {
    ...post,
  },
};
