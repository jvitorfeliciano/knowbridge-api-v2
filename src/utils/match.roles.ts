import { UserPayload } from 'src/users/models/user.payload';

export function matchRoles(rolesVector: string[], user: UserPayload): boolean {
  let hasAccess = false;

  for (const role of rolesVector) {
    if (role === user.role) {
      hasAccess = true;
      break;
    }
  }

  return hasAccess;
}
