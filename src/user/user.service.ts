import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService implements UserInterface {
    constructor(
        private prisma: PrismaService
    ) { }

    index() {
        throw new Error('Method not implemented.');
    }
    create(arg0: any, arg1: any) {
        throw new Error('Method not implemented.');
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
