import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateDto } from './dto';
import { UserType } from './types';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService implements UserInterface {
    constructor(
        private prisma: PrismaService
    ) { }

    async index() {
        const result = await this.prisma.user.findMany({
            include: {
                post: true
            }
        })
        return result
    }

    async create(dto: UserCreateDto, userId: string): Promise<UserType> {
        try {
            const user = await this.prisma.user.create({
                data: {
                    uuid: userId,
                    name: dto.name,
                    surname: dto.surname
                }, select: {
                    name: true,
                    surname: true
                }
            })

            return user
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new ForbiddenException('The user is already created')
                }
            }
        }
    }

    async show(userId: string) {
        try {
            const userShow = await this.prisma.user.findUnique({
                where: {
                    uuid: userId
                }, include: {
                    post: true
                }
            })
            return userShow
        } catch (e) {
            throw e
        }
    }

    async edit(userId: string) {
        try {
            const userEdit = await this.prisma.user.findUnique({
                where: {
                    uuid: userId
                }
            })
            return userEdit
        } catch (e) {
            throw e
        }
    }

    async update(dto: UserCreateDto, userJWT: string) {
        try {
            const userData = await this.prisma.auth.findUnique({
                where: {
                    jwt: userJWT
                }, select: {
                    uuid: true
                }
            })
            if (!userData) throw new ForbiddenException('User not exist')

            const updateUser = await this.prisma.user.update({
                where: {
                    uuid: userData.uuid
                }, data: {
                    name: dto.name,
                    surname: dto.surname
                }
            })

            return updateUser
        } catch (e) {
            throw e
        }
    }

    async destroy(userId: string) {
        try {
            const postDelete = await this.prisma.post.deleteMany({
                where: {
                    auhorId: userId
                }
            })
            const userDelete = await this.prisma.user.delete({
                where: {
                    uuid: userId
                }
            })
            const authDelete = await this.prisma.auth.delete({
                where: {
                    uuid: userId
                }
            })

            return {
                postDelete,
                userDelete,
                authDelete
            }
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError){
                if (e.code === "P2025") {
                    throw new ForbiddenException(`User not found`)
                }
            }
        }
    }
}
