import { Role } from '@prisma/client';

interface UserPayload {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
}

export { UserPayload };
