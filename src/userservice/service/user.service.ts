import {ConflictException, Injectable} from "@nestjs/common";
import {UserRepository} from "../domain/repository/user.repository";
import {UserRequest} from "../domain/dto/request/user.request";
import { UserEntity } from "../domain/entity/user.entity";
import * as crypto from 'crypto';
import {Role} from "../domain/enum/role.enum";
import BaseUserResponse from "../domain/dto/response/create-user.response";
@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

        async addUser(userRequest:UserRequest){
        const { password , rePassword , username  } = userRequest;
            if (password !== rePassword) {
                throw new ConflictException('rePassword is not same as password.');
            }

            const user = new UserEntity();
            user.password = crypto.createHash('sha256').update(password).digest('hex');
            user.username = username;
            user.roleId = Role.USER;

            try {
                await user.save();
            } catch (e) {
                throw new ConflictException( "error in save user.");
            }
            return new BaseUserResponse(user, "user added successfully");
        }
}

