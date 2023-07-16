import { Module } from '@nestjs/common';
import { QuestionsController } from './controller/questions.controller';
import { QuestionsService } from './service/questions.service';
import { QuestionsRepository } from './repository/questions.repository';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionsRepository]
})
export class QuestionsModule {}
