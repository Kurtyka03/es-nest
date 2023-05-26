import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateDto } from './dto';

@Injectable()
export class UserService implements UserInterface {
    constructor(
        private prisma: PrismaService
    ) { }

    async index() {
        throw new Error('Method not implemented.');
    }

    async create(dto: UserCreateDto, userId: string) {
        
    }

    async show(userId: string) {
        throw new Error('Method not implemented.');
    }

    async edit(userId: string) {
        throw new Error('Method not implemented.');
    }

    async update(dto: UserCreateDto, userId: string) {
        throw new Error('Method not implemented.');
    }

    async destroy(userId: string) {
        throw new Error('Method not implemented.');
    }
}
