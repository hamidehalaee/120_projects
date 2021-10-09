import { TaskEntity } from './task.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
    JoinTable,
} from 'typeorm';
// import { UserEntity } from '@user/entity/user.entity';
import {BaseEntity} from "../../../base/base.entity";
import {UserEntity} from "../../../userservice/domain/entity/user.entity";

@Entity('todo')
export class TodoEntity extends BaseEntity{

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @CreateDateColumn()
    createdOn?: Date;

    @CreateDateColumn()
    updatedOn?: Date;

    @ManyToOne(type => UserEntity)
    owner?: UserEntity;

    @OneToMany(() => TaskEntity, (task)  => task.todo)
    tasks?: TaskEntity[];
}