import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { TodoController } from "src\\modules\\to-do\\todo.controller.ts";
import { TodoService } from "src\\modules\\to-do\\todo.service.ts";
import { TodoRepository } from "src\\modules\\to-do\\repositories\\todo.repository.ts";

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    controllers: [TodoController],
    providers: [TodoService, TodoRepository] //injectables
})
export class TodoModule{}