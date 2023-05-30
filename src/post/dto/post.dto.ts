import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PostCreateDto {
    @IsString()
    @IsNotEmpty()
    title

    @IsString()
    @IsNotEmpty()
    description

    @IsNumber()
    @IsNotEmpty()
    price
}