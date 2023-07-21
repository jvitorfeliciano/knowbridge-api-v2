import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { VideosService } from '../service/videos.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateVideoDTO } from '../dtos/create.video.dto';
import { User } from 'src/decorators/user.decorator';
import { UserPayload } from 'src/users/models/user.payload';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateVideoDTO) {
    const video = await this.videosService.create(data);

    return video;
  }

  @Post('conclude/:videoId')
  @Auth()
  async registerConcludedVideo(
    @User() user: UserPayload,
    @Param('videoId', ParseIntPipe) videoId: number,
  ) {
    await this.videosService.registerConcludedVideo(user.id, videoId);
  }

  @Get(':videoId')
  @Auth()
  async findById(
    @User() user: UserPayload,
    @Param('videoId', ParseIntPipe) videoId: number,
  ) {
    const video = await this.videosService.findByIdIncludingItsConclusionStatus(
      user.id,
      videoId,
    );

    return video;
  }
}
