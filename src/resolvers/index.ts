import { post } from './Mutation/user';
import { location } from './Mutation/location';
import { get } from './Query/user';
import { getLocation } from './Query/location';

export default {
  Query: {
    ...get,
    ...getLocation,
  },
  Mutation: {
    ...post,
    ...location,
  },
};
