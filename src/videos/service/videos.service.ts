import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { VideosRepository } from '../repository/videos.repository';
import { SubfieldsService } from 'src/subfields/service/subfields.service';
import { CreateVideoDTO } from '../dtos/create.video.dto';

@Injectable()
export class VideosService {
  constructor(
    private videosRepository: VideosRepository,
    private subfieldsService: SubfieldsService,
  ) {}

  async create(data: CreateVideoDTO) {
    await this.subfieldsService.findById(data.subfieldId);

    const video = await this.videosRepository.create(data);

    return video;
  }

  async findById(id: number) {
    const video = await this.videosRepository.findById(id);

    if (!video) {
      throw new NotFoundException('Video is not registered');
    }

    return video;
  }

  async registerConcludedVideo(userId: number, videoId: number) {
    await this.findById(videoId);

    const video =
      await this.videosRepository.findVideoConcludedByItsIdAndUserId(
        userId,
        videoId,
      );

    if (video) {
      throw new ConflictException('Video is already concluded');
    }

    await this.videosRepository.registerConcludedVideo(userId, videoId);
  }

  async findByIdIncludingItsConclusionStatus(userId: number, videoId: number) {
    const video =
      await this.videosRepository.findByIdIncludingItsConclusionStatus(
        userId,
        videoId,
      );

    if (!video) {
      throw new NotFoundException('Video is not registered');
    }

    return video;
  }
}
