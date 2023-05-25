import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthInterface } from 'src/interface';
import { AuthService } from './auth.service';
import { RegisterDto, SignInDto } from './dto';
import { Token } from './types';

@Controller('auth')
export class AuthController implements AuthInterface {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.CREATED)
    @Post('/register')
    register(@Body() dto: RegisterDto): Promise<Token> {
        return this.authService.register(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post('/signin')
    signIn(@Body() dto: SignInDto): Promise<Token> {
        return this.authService.signIn(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    signOut(arg0: any) {
        return this.authService.signOut(arg0)
    }
}
