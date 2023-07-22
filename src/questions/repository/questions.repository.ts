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

  findById(id: number) {
    return this.prismaService.question.findUnique({
      where: {
        id,
      },
    });
  }

  findByIdIncludingProvidedAnswer(questionId: number, answerId: number) {
    return this.prismaService.question.findUnique({
      where: {
        id: questionId,
      },
      include: {
        answers: {
          where: {
            id: answerId,
          },
        },
      },
    });
  }

  findByIdIncludingItsAnswersAndConclusionStatus(
    userId: number,
    questionId: number,
  ) {
    return this.prismaService.question.findUnique({
      where: {
        id: questionId,
      },
      include: {
        answers: true,
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

  registerCorrectAnswer(userId: number, questionId: number) {
    return this.prismaService.questionsOnUsers.create({
      data: {
        userId,
        questionId,
      },
    });
  }

  findQuestionConcludedByItsIdAndUserId(userId: number, questionId: number) {
    return this.prismaService.questionsOnUsers.findUnique({
      where: {
        userId_questionId: {
          userId,
          questionId,
        },
      },
    });
  }

  createUserReportOnIABuggyInstruction(
    userId: number,
    questionId: number,
    description: string,
  ) {
    return this.prismaService.tutorIABugs.create({
      data: {
        userId,
        questionId,
        description,
      },
    });
  }
}
