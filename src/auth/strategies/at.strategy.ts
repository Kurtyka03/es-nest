import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../types";
import { Request } from 'express';

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'at-secret',
            passReqoCallback: true
        })
    }

    validate(req: Request ,payload: JwtPayload){
        const token = req.get('authorization').replace('Bearer', '').trim();
        return {
            ...payload,
            token
        }
    }
}