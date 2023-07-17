import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateQuestionDTO } from '../dtos/create.question.dto';

@Injectable()
export class QuestionsRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: CreateQuestionDTO) {
    return this.prismaService.question.create({
      data: {
        title: data.title,
        statement: data.statement,
        videoId: data.videoId,
        answers: {
          create: data.answers,
        },
      },
      include: {
        answers: true,
      },
    });
  }
}
