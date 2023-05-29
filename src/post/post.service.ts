import { Injectable } from '@nestjs/common';
import { PostInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService implements PostInterface {
    constructor(private prisma: PrismaService) { }

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
