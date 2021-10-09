import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { BaseEntity } from '../../../base/base.entity'
import {UserEntity} from "./user.entity";
@Entity('role')

export class RoleEntity extends BaseEntity {

    @Column({nullable: true})
    createdBy?: number;

    @CreateDateColumn({type: "timestamp with time zone"})
    createdAt?: Date;

    @Column({nullable: true})
    updatedBy?: number;

    @CreateDateColumn({type: "timestamp with time zone"})
    updatedAt?: Date;

    @PrimaryColumn()
    name: string;

    @Column({nullable: true})
    description?: string;

    // @ManyToMany(type => PrivilegeEntity, object => object.roles)
    // @JoinTable()
    // privileges: PrivilegeEntity[];

    @OneToMany(type => UserEntity, userEntity => userEntity.role)
    users: UserEntity[];

}
