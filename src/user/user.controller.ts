import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserInterface } from 'src/interface';
import { UserCreateDto } from './dto';
import { GetUserId } from 'src/common/decorator';

@Controller('')
export class UserController implements UserInterface{
    constructor(){}
    
    @HttpCode(HttpStatus.OK)
    @Get('users')
    index(){
        
    }

    @HttpCode(HttpStatus.OK)
    @Get('/users/:id')
    show(@Param() id: string) {
    }
    
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    @Get('users/:id/edit')
    edit(arg0: any) {
    }
    
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.CREATED)
    @Post('users')
    create(@Body() dto: UserCreateDto, @GetUserId() userid: string){
    }

    
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    @Put('/users')
    update(@Body() dto: UserCreateDto, @GetUserId() userId: string) {
    }
    
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    @Delete('users')
    destroy(@GetUserId() userId: string) {
    }
}
