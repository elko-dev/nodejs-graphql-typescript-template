import { post } from './Mutation/post';

export default {
  Query: {

  },
  Mutation: {
    ...post,
  },
};
