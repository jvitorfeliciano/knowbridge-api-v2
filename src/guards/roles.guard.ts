import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserPayload } from 'src/users/models/user.payload';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (roles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as UserPayload;

    return this.matchRoles(roles, user);
  }

  matchRoles(rolesVector: string[], user: UserPayload): boolean {
    let hasAccess = false;

    for (const role of rolesVector) {
      if (role === user.role) {
        hasAccess = true;
        break;
      }

      return hasAccess;
    }
  }
}
