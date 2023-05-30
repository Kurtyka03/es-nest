import { Injectable } from '@nestjs/common';
import { PostInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostCreateDto } from './dto';
import { Prisma } from '@prisma/client';
import { PostType } from './types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostService implements PostInterface {
    constructor(private prisma: PrismaService) { }

    async index() {
        const result = await this.prisma.post.findMany()
        return result
    }

    async create(userId: string, dto: PostCreateDto): Promise<PostType> {
        try {
            const post = await this.prisma.post.create({
                data: {
                    uuid: uuidv4(),
                    title: dto.title,
                    description: dto.description,
                    price: dto.price,
                    auhorId: userId
                }, select: {
                    title: true,
                    description: true,
                    price: true
                }
            })

            return post
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError){
                throw e.code
            }
        }
    }

    show(arg0: any) {
        throw new Error('Method not implemented.');
    }

    edit(arg0: any) {
        throw new Error('Method not implemented.');
    }

    update(arg0: any, arg1: any) {
        throw new Error('Method not implemented.');
    }
    
    destroy(arg0: any) {
        throw new Error('Method not implemented.');
    }
}
