import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateTrailDTO } from '../dtos/create.trail.dto';

@Injectable()
export class TrailsRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: CreateTrailDTO) {
    return this.prismaService.trail.create({
      data,
    });
  }

  findById(id: number) {
    return this.prismaService.trail.findUnique({
      where: {
        id,
      },
    });
  }

  createUserEnrollment(userId: number, trailId: number) {
    return this.prismaService.trailsOnUsers.create({
      data: {
        userId,
        trailId,
      },
    });
  }

  findUserEnrollment(userId: number, trailId: number) {
    return this.prismaService.trailsOnUsers.findUnique({
      where: {
        userId_trailId: {
          userId,
          trailId,
        },
      },
    });
  }

  deleteUserEnrollment(userId: number, trailId: number) {
    return this.prismaService.trailsOnUsers.delete({
      where: {
        userId_trailId: {
          userId,
          trailId,
        },
      },
    });
  }
}
