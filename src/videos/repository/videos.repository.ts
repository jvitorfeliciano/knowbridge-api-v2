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

  findByIdIncludingItsConclusionStatus(userId: number, videoId: number) {
    return this.prismaService.video.findUnique({
      where: {
        id: videoId,
      },
      include: {
        users: {
          where: {
            userId,
          },
          select: {
            createdAt: true,
          },
        },
      },
    });
  }

  findVideoConcludedByItsIdAndUserId(userId: number, videoId: number) {
    return this.prismaService.videosOnUsers.findUnique({
      where: {
        userId_videoId: {
          userId,
          videoId,
        },
      },
    });
  }

  registerConcludedVideo(userId: number, videoId: number) {
    return this.prismaService.videosOnUsers.create({
      data: {
        userId,
        videoId,
      },
    });
  }
}
