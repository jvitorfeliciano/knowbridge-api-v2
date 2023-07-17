import { Module } from '@nestjs/common';
import { QuestionsController } from './controller/questions.controller';
import { QuestionsService } from './service/questions.service';
import { QuestionsRepository } from './repository/questions.repository';
import { AuthModule } from 'src/auth/auth.module';
import { VideosModule } from 'src/videos/videos.module';

@Module({
  imports: [AuthModule, VideosModule],
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionsRepository],
})
export class QuestionsModule {}
