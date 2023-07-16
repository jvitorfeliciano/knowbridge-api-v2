import { Module } from '@nestjs/common';
import { VideosController } from './controller/videos.controller';
import { VideosService } from './service/videos.service';
import { VideosRepository } from './repository/videos.repository';

@Module({
  controllers: [VideosController],
  providers: [VideosService, VideosRepository],
})
export class VideosModule {}
