export type Token = {
    access_token: string
}

export type Jwt = {
    jwt: string
}

export type JwtPayload = {
    sub: string;
    email: string;
    hash: string;
}