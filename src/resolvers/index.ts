import { post } from './Mutation/user';
import { get } from './Query/user';

export default {
  Query: {
    ...get
  },
  Mutation: {
    ...post,
  },
};
