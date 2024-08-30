import { IsInt, Length } from "class-validator";

export class CreateTodoItem{
    @Length(10, 256)
    text: string;

    @IsInt()
    difficult: number;
}