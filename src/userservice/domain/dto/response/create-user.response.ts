import {UserEntity} from "../../entity/user.entity";

export default class BaseUserResponse {
    user: UserEntity;
    data?: any;
    constructor(user: UserEntity, data?: any) {
        this.user = user;
        this.data = data;
    }
}