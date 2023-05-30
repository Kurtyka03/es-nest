import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserInterface } from 'src/interface';
import { UserCreateDto } from './dto';
import { GetUserId, Public } from 'src/common/decorator';
import { UserService } from './user.service';
import { UserType } from './types';

@Controller('')
export class UserController implements UserInterface{
    constructor(
        private userService: UserService
    ){}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Get('users')
    index(){
        return this.userService.index();
    }

    @HttpCode(HttpStatus.OK)
    @Get('/users/:id')
    show(@Param() id: string) {
        return this.userService.show(id)
    }
    
    @HttpCode(HttpStatus.OK)
    @Get('users/edit')
    edit(@GetUserId() userId: string) {
        return this.userService.edit(userId)
    }
    
    @HttpCode(HttpStatus.CREATED)
    @Post('users')
    create(@Body() dto: UserCreateDto, @GetUserId() userid: string): Promise<UserType>{
        return this.userService.create(dto, userid)
    }

    
    @HttpCode(HttpStatus.OK)
    @Put('/users')
    update(@Body() dto: UserCreateDto, @GetUserId() userId: string) {
        return this.userService.update(dto, userId)
    }
    
    @HttpCode(HttpStatus.OK)
    @Delete('users')
    destroy(@GetUserId() userId: string) {
        return this.userService.destroy(userId)
    }
}
