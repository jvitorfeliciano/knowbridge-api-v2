import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateUserDto } from '../dtos/create.user.dto';

@Injectable()
export class UsersRepository {
  constructor(private prismaService: PrismaService) {}

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  create(data: CreateUserDto) {
    return this.prismaService.user.create({
      data,
    });
  }
}
