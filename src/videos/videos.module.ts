import { Module } from '@nestjs/common';
import { VideosController } from './controller/videos.controller';
import { VideosService } from './service/videos.service';
import { VideosRepository } from './repository/videos.repository';
import { AuthModule } from 'src/auth/auth.module';
import { SubfieldsModule } from 'src/subfields/subfields.module';

@Module({
  controllers: [VideosController],
  imports: [AuthModule, SubfieldsModule],
  providers: [VideosService, VideosRepository],
})
export class VideosModule {}
