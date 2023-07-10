import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserPayload } from 'src/users/models/user.payload';

export const User = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as UserPayload;

    return user;
  },
);
