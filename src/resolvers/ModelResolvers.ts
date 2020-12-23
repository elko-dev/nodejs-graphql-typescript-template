import { Model } from "../models/model";
import {UserEntity} from "../models/user.entity";
import {User} from "../graphql/generated";
function resolveModel<T extends Model>(model: T) {
    return Object.assign(model, {
        id: model.id.toString(),
    });
}
export function resolveUser(user: UserEntity): User {

    const source: Partial<User> = {};

    return Object.assign(resolveModel(user), source);
}