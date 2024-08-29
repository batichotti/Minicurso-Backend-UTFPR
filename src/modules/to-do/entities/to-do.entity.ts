import { BaseEntity, Column, Entity } from "typeorm";

@Entity()
export class TodoEntity extends BaseEntity {
    
    @Column()
    text: string

    
}