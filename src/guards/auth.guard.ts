import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    const user = await this.authService.checkToken(token); // if the token is invalid the checkToken throws an error that will be handled by the nest's excpetion layer interrupting the execution of the functions on the call stack;

    request.user = user;

    return true;
  }
}
