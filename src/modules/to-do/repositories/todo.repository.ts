import { Injectable } from "@nestjs/common";
import { Between, ILike, Repository } from "typeorm";
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
            const startOfDay = new Date(params.createdAt)
            startOfDay.setHours(0)
            startOfDay.setMinutes(0)
            startOfDay.setSeconds(0)
            startOfDay.setMilliseconds(0)
            const endOfDay = new Date(params.createdAt)
            endOfDay.setHours(23)
            endOfDay.setMinutes(59)
            endOfDay.setSeconds(59)
            endOfDay.setMilliseconds(999)
            where['createdAt'] = Between(startOfDay, endOfDay)
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

        const skip = (params.page - 1) * params.perPage

        const entities = await this.find({
            where,
            skip,
            order: {
                complete: 'ASC',
                createdAt: 'DESC'
            }
        })
        return entities;
    }
}