import { Injectable } from "@nestjs/common";
import { TodoRepository } from "./repositories/todo.repository";
import { TodoEntity } from "./entities/todo.entity";

@Injectable()
export class TodoService {
    constructor(private readonly todoRepository: TodoRepository) {}

    async createNewTodoItem(text: string, difficult: number): Promise<TodoEntity> {
        const data = {
            text
        }
        if (difficult <= 0) data["difficult"] = 0
        else if (difficult <= 25) data["difficult"] = 25
        else if (difficult <= 50) data["difficult"] = 50
        else if (difficult <= 75) data["difficult"] = 75
        else data["difficult"] = 100

        const entity = await this.todoRepository.registerItem(data);
        return entity
    }
}