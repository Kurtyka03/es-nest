import { ForbiddenException, Injectable, Post } from '@nestjs/common';
import { PostInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostCreateDto } from './dto';
import { Prisma } from '@prisma/client';
import { PostType } from './types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostService implements PostInterface {
    constructor(private prisma: PrismaService) { }

    async index(skipPosts: string) {
        const result = await this.prisma.post.findMany({
            skip: Number(skipPosts),
            take: 10
        })
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
                if (e.code === 'P2003') {
                    throw new ForbiddenException('User with this id not exist')
                }
            }
        }
    }

    async show(postId: string) {
        try {
            const post = await this.prisma.post.findUnique({
                where: {
                    uuid: postId
                }, select: {
                    title: true,
                    description: true,
                    price: true
                }
            })
            return post
        } catch (e) {
            throw e
        }
    }

    async edit(userId: string, postId: string) {
        try {
            const post = await this.prisma.post.findUnique({
                where: {
                    uuid: postId
                }, select: {
                    title: true,
                    description: true,
                    price: true,
                    auhorId: true
                }
            })

            if (post.auhorId !== userId) return false
            return post
        } catch (e) {
            throw e
        }
    }

    async update(dto: PostCreateDto, postId: string): Promise<PostType> {
        try {
            const postUpdate = await this.prisma.post.update({
                where: {
                    uuid: postId
                }, data: {
                    updatedAt: new Date(),
                    title: dto.title,
                    description: dto.description,
                    price: dto.price
                }, select: {
                    title: true,
                    description: true,
                    price: true,
                }
            })
            return postUpdate
        } catch (e) {
            throw e
        }
    }

    async destroy(postId: string) {
        try {
            const postDelete = await this.prisma.post.delete({
                where: {
                    uuid: postId
                }
            })
            return postDelete
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError){
                if (e.code === "P2025") {
                    throw new ForbiddenException(`Post not found`)
                }
            }
        }
    }
}
