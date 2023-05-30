import { Body, Controller, HttpCode, HttpStatus, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthInterface } from 'src/interface';
import { AuthService } from './auth.service';
import { RegisterDto, SignInDto } from './dto';
import { Token } from './types';
import { GetUserId, GetUserJWT, Public } from 'src/common/decorator';

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

    @HttpCode(HttpStatus.OK)
    @Put('/auths')
    update(
        @GetUserId() userId: string,
        @Body() dto: RegisterDto,
        @GetUserJWT() userJWT: string): Promise<Token> {
        return this.authService.update(userId, dto, userJWT)
    }
}
