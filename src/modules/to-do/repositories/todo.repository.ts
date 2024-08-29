import { Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { TodoEntity } from "../entities/todo.entity";

@Injectable()
export class todoRepository extends Repository<TodoEntity>{
    async getOneById(id: string): Promise<TodoEntity> {
        const entity = await this.findOneBy({
            id // mesma coisa que id: id
        })

        if (!entity)
            throw new Error("Item with inputed id not founded");

        return entity
    }

    async list(params: {
        page: number,
        perPage: number,
        createdAt?: Date,
        difficult?: number,
        completed?: boolean,
        search?: string
    }): Promise<TodoItem[]>{
        const where = {}
        if (params.createdAt){
            where['createdAt'] = params.createdAt
        }
        if (params.difficult){
            where['difficult'] = params.difficult
        }
        if (params.completed){
            where['completed'] = params.completed
        }
        if (params.search){
            where['text'] = ILike(`%${params.search}%`)
        }

        const entities = await this.find({
            
        })
    }
}