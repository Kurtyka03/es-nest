import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { PostInterface } from 'src/interface';
import { PostService } from './post.service';
import { GetUserId } from 'src/common/decorator';
import { PostCreateDto } from './dto';
import { PostType } from './types';

@Controller('')
export class PostController implements PostInterface {
    constructor(private service: PostService) { }

    @Get('index')
    @HttpCode(HttpStatus.OK)
    index() {
        return this.service.index()
    }

    @Post('posts')
    @HttpCode(HttpStatus.CREATED)
    create(@GetUserId() userId: string, @Body() dto: PostCreateDto): Promise<PostType> {
        return this.service.create(userId, dto)
    }

    @Get('/posts/:id')
    show(arg0: any) {
        throw new Error('Method not implemented.');
    }

    @Get('/posts/edit')
    edit(arg0: any) {
        throw new Error('Method not implemented.');
    }

    @Put('/posts')
    update(arg0: any, arg1: any) {
        throw new Error('Method not implemented.');
    }

    @Delete('/posts')
    destroy(arg0: any) {
        throw new Error('Method not implemented.');
    }
}
