import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateQuestionDTO } from '../dtos/create.question.dto';
import { QuestionsService } from '../service/questions.service';
import { User } from 'src/decorators/user.decorator';
import { UserPayload } from 'src/users/models/user.payload';
import { ConcludeQuestionDTO } from '../dtos/conclude.question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateQuestionDTO) {
    const question = await this.questionsService.create(data);

    return question;
  }

  @Post('conclude/:questionId')
  @Auth()
  async validateProvidedAnswer(
    @User() user: UserPayload,
    @Param('questionId', ParseIntPipe) questionId: number,
    @Body() body: ConcludeQuestionDTO,
  ) {
    await this.questionsService.validateProvidedAnswer(
      user.id,
      questionId,
      body.answerId,
    );
  }

  @Get(':questionId')
  @Auth()
  async findById(
    @User() user: UserPayload,
    @Param('questionId', ParseIntPipe) questionId: number,
  ) {
    const question =
      await this.questionsService.findByIdIncludingItsAnswersAndConclusionStatus(
        user.id,
        questionId,
      );

    return question;
  }
}
