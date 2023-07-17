import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateQuestionDTO } from '../dtos/create.question.dto';
import { QuestionsService } from '../service/questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateQuestionDTO) {
    const question = await this.questionsService.create(data);

    return question;
  }
}
