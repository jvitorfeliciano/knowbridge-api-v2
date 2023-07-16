import { Module } from '@nestjs/common';
import { TrailsController } from './controller/trails.controller';
import { TrailsService } from './service/trails.service';
import { TrailsRepository } from './repository/trails.repository';
import { DisciplinesModule } from 'src/disciplines/disciplines.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DisciplinesModule, AuthModule],
  exports: [TrailsService],
  controllers: [TrailsController],
  providers: [TrailsService, TrailsRepository],
})
export class TrailsModule {}
