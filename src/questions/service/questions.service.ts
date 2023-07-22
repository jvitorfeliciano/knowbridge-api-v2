import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { QuestionsRepository } from '../repository/questions.repository';
import { VideosService } from 'src/videos/service/videos.service';
import { CreateQuestionDTO } from '../dtos/create.question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    private questionsRepository: QuestionsRepository,
    private videosService: VideosService,
  ) {}

  async create(data: CreateQuestionDTO) {
    await this.videosService.findById(data.videoId);

    const question = await this.questionsRepository.create(data);

    return question;
  }

  async checkIfUserCompletedTheQuestion(userId: number, questionId: number) {
    const question =
      await this.questionsRepository.findQuestionConcludedByItsIdAndUserId(
        userId,
        questionId,
      );

    if (question) {
      throw new ConflictException('Question already completed');
    }
  }

  async validateProvidedAnswer(
    userId: number,
    questionId: number,
    answerId: number,
  ) {
    await this.checkIfUserCompletedTheQuestion(userId, questionId);

    const question =
      await this.questionsRepository.findByIdIncludingProvidedAnswer(
        questionId,
        answerId,
      );

    if (!question) {
      throw new NotFoundException('Question is not registered');
    }

    if (question.answers.length === 0) {
      throw new NotFoundException('Answer is not registered');
    }

    if (!question.answers[0].isCorrect) {
      //since the answerId is unique it's guaranteed there will be only one position;

      throw new BadRequestException('Incorrect answer');
    }

    await this.questionsRepository.registerCorrectAnswer(userId, questionId);
  }

  async findByIdIncludingItsAnswersAndConclusionStatus(
    userId: number,
    questionId: number,
  ) {
    const question =
      await this.questionsRepository.findByIdIncludingItsAnswersAndConclusionStatus(
        userId,
        questionId,
      );

    if (!question) {
      throw new NotFoundException('Question is not registered');
    }

    return question;
  }

  async createUserReportOnIABuggyInstruction(
    userId: number,
    questionId: number,
    description: string,
  ) {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new NotFoundException('Question is not registered');
    }

    await this.questionsRepository.createUserReportOnIABuggyInstruction(
      userId,
      questionId,
      description,
    );
  }
}
