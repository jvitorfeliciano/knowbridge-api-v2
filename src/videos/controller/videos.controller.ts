import { Body, Controller, Post } from '@nestjs/common';
import { VideosService } from '../service/videos.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateVideoDTO } from '../dtos/create.video.dto';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateVideoDTO) {
    const video = await this.videosService.create(data);

    return video;
  }
}
