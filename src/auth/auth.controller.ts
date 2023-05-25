import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthInterface } from 'src/interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController implements AuthInterface {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    register(arg0: any) {
        return this.authService.register(arg0)
    }

    @HttpCode(HttpStatus.OK)
    @Post()    
    signIn(arg0: any) {
        return this.authService.signIn(arg0)
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    signOut(arg0: any) {
        return this.authService.signOut(arg0)
    }
}
