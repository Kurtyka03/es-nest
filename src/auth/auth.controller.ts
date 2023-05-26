import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthInterface } from 'src/interface';
import { AuthService } from './auth.service';
import { RegisterDto, SignInDto } from './dto';
import { Token } from './types';
import { GetUserId, Public } from 'src/common/decorator';

@Controller('auth')
export class AuthController implements AuthInterface {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('/register')
    register(@Body() dto: RegisterDto): Promise<Token> {
        return this.authService.register(dto)
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('/signin')
    signIn(@Body() dto: SignInDto): Promise<Token> {
        return this.authService.signIn(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post('signout')
    signOut(@GetUserId() authId: string) {
        return this.authService.signOut(authId)
    }
}
