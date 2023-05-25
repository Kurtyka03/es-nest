import { Injectable } from '@nestjs/common';
import { AuthInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService implements AuthInterface {
    constructor(private prisma: PrismaService) { }

    async register(arg0: any) {
        throw new Error('Method not implemented.');
    }

    async signIn(arg0: any) {
        throw new Error('Method not implemented.');
    }

    async signOut(arg0: any) {
        throw new Error('Method not implemented.');
    }
}
