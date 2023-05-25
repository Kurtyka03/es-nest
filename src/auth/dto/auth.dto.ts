import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignIn {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class Register {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

//wylogowanie (zmianna zmiennej login z true na false)
export class SignOut {
    @IsString()
    @IsNotEmpty()
    uuid: string;
}