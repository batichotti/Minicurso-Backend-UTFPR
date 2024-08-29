import { Body, Controller, Post } from "@nestjs/common";
import { TodoService } from './todo.service';
import { TodoEntity } from "./entities/todo.entity";

@Controller('todo')
export class TodoController{
    constructor(private readonly TodoService: TodoService){}

    @Post('create')
    async create(@Body() body: any): Promise<TodoEntity>{
        return await this.TodoService.createNewTodoItem(body.text, body.difficult)
    }
}
