import {TaskEntity} from "../entity/task.entity";
import {EntityRepository} from "typeorm";

@EntityRepository(TaskEntity)
export class TaskRepository {}