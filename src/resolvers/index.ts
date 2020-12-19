import {post} from './Mutation/user';
import {location} from './Mutation/location';
import {get} from './Query/user';
import {getLocation} from './Query/location';
import {dateScalar} from './Scalar/date.scalar';

export default {
    Date: dateScalar,
    Query: {
        ...get,
        ...getLocation,
    },
    Mutation: {
        ...post,
        ...location,
    },
};
