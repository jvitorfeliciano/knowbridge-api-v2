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
}
