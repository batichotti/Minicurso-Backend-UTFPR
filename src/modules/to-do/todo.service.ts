import { Injectable } from "@nestjs/common";
import { todoRepository } from './repositories/todo.repository';

@Injectable()
export class TodoService{
    constructor(private readonly todoRepository: todoRepository){}
        
    async createNewTodoItem(text: string, difficult: number){
        const data = {
            text
        }
        if (difficult < 0) data["difficult"] = 0
        else if (difficult <= 25) data["difficult"] = 25
        else if (difficult <= 50) data["difficult"] = 50
        else if (difficult <= 75) data["difficult"] = 75
        else data["difficult"] = 100

        const entity = await this.todoRepository.registerItem(data);
    }
}