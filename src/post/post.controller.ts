import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PostInterface } from 'src/interface';
import { PostService } from './post.service';
import { GetUserId } from 'src/common/decorator';
import { PostCreateDto } from './dto';
import { PostType } from './types';

@Controller('')
export class PostController implements PostInterface {
    constructor(private service: PostService) { }

    @Get('index/posts/:number')
    @HttpCode(HttpStatus.OK)
    index(@Param('number') skipPosts: string) {
        return this.service.index(skipPosts)
    }

    @Post('posts')
    @HttpCode(HttpStatus.CREATED)
    create(@GetUserId() userId: string, @Body() dto: PostCreateDto): Promise<PostType> {
        return this.service.create(userId, dto)
    }

    @Get('/posts/:id')
    show(@Param('id') postId: string) {
        return this.service.show(postId)
    }

    @Get('/posts/:id/edit')
    edit(@GetUserId() userId: string, @Param('id') postId: string) {
        return this.service.edit(userId, postId)
    }

    @Put('/posts/:id')
    update(@Body() dto: PostCreateDto, @Param('id') postId: string): Promise<PostType> {
        return this.service.update(dto, postId)
    }

    @Delete('/posts')
    destroy(@Param('id') postId: string) {
        return this.service.destroy(postId)
    }
}
