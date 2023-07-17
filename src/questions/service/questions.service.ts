import { Injectable } from '@nestjs/common';
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
}
