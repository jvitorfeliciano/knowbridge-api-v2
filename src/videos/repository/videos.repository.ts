import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateVideoDTO } from '../dtos/create.video.dto';

@Injectable()
export class VideosRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: CreateVideoDTO) {
    return this.prismaService.video.create({
      data,
    });
  }

  findById(id: number) {
    return this.prismaService.video.findUnique({
      where: {
        id,
      },
    });
  }
}
