import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TaskRepository} from "./domain/repository/task.repository";
import {TodoRepository} from "./domain/repository/todo.repository";

@Module({
    imports: [TypeOrmModule.forFeature([TaskRepository,TodoRepository])],
    controllers: [],
    providers: [],
})
export class AppModule {}
