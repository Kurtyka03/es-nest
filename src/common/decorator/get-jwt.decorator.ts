import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetUserJWT = createParamDecorator(
    (data: undefined, context: ExecutionContext) => {
        const req = context.switchToHttp().getRequest()
        const authorization = req.headers.authorization
        const JWT = authorization.replace('Bearer ', '')
        return JWT
    }
)