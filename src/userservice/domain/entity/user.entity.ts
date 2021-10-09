import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import { Exclude } from "class-transformer";
import {Role} from "../enum/role.enum";
import { BaseEntity } from "src/base/base.entity";
import {RoleEntity} from "./role.entity";

Entity('user')
export class UserEntity extends BaseEntity{

    @Column({nullable: false})
    username: string;

    @Exclude()
    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    rePassword: string;

    @Column({default: 0})
    level: number;

    @Column({default: false})
    blackList: boolean;

    @Column({nullable: true})
    blackListReason?: string;

    @ManyToOne(type => RoleEntity, object => object.users)
    @JoinColumn({name: 'roleId'})
    role?: RoleEntity;

    @Column({default: Role.USER})
    roleId: Role;

    @Column({nullable: true})
    lastLogin: Date;

    @Column({nullable: true})
    lastUpdateByUser: Date;

    // @Column({default: TwoStepVerificationStatus.DEACTIVATED})
    // twoStepVerification: TwoStepVerificationStatus;

    @Column({default: false})
    twoFactorAuthStatus: boolean;

}