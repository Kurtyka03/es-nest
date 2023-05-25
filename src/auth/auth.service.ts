import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthInterface } from 'src/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { RegisterDto, SignInDto } from './dto';
import { Token } from './types';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService implements AuthInterface {
    constructor(
        private prisma: PrismaService,
        private jwtServices: JwtService) { }

    async register(dto: RegisterDto): Promise<Token> {
        try {
            const hash = await this.hashData(dto.password)
            const uuid = await uuidv4()
            const jwt = await this.getToken(uuid, dto.email, hash)

            await this.prisma.auth.create({
                data: {
                    uuid: uuid,
                    email: dto.email,
                    hash: hash,
                    jwt: jwt.access_token
                }
            })

            return jwt
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new ForbiddenException('User with this data cannot be created')
                }
            }
        }
    }

    async signIn(dto: SignInDto): Promise<Token> {
        try {
            console.log(dto)
            const auth = await this.prisma.auth.findUnique({
                where: {
                    email: dto.email
                }, select: {
                    hash: true,
                    jwt: true
                }
            })
            console.log(auth)
            if (!auth) throw new ForbiddenException('Access Denied')

            const passwordMatches = await bcrypt.compare(dto.password, auth.hash)
            if (!passwordMatches) throw new ForbiddenException("Access Denied")

            const access_token = auth.jwt

            return { access_token }
        } catch (e) {
            throw e
        }
    }

    async signOut(arg0: any) {
        throw new Error('Method not implemented.');
    }

    hashData(data: string) {
        return bcrypt.hash(data, 10)
    }

    async getToken(userId: string, email: string, hash: string) {
        const access_token = await this.jwtServices.signAsync({
            sub: userId,
            email,
            hash
        }, {
            secret: 'at-secret'
        })
        return { access_token }
    }
}
