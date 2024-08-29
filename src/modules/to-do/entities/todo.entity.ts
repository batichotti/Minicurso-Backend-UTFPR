import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TodoEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    text: string

    @Column()
    complete: boolean

    @Column()
    difficult: number

    @CreateDateColumn()
    createdAr: Date

    @UpdateDateColumn()
    updatedAr: Date

    @DeleteDateColumn()
    deletedAt: Date | null
}