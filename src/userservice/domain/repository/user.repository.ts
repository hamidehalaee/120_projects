import {BeforeInsert, EntityRepository} from "typeorm";
import {UserEntity} from "../entity/user.entity";


@EntityRepository(UserEntity)
export class UserRepository {

}