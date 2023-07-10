import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private prismaService: PrismaService) {}

  createSession(userId: number) {
    return this.prismaService.session.create({
      data: {
        userId,
      },
    });
  }
}
