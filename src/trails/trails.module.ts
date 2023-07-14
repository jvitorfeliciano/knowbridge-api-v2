import { Module } from '@nestjs/common';
import { TrailsController } from './controller/trails.controller';
import { TrailsService } from './service/trails.service';
import { TrailsRepository } from './repository/trails.repository';

@Module({
  controllers: [TrailsController],
  providers: [TrailsService, TrailsRepository],
})
export class TrailsModule {}
