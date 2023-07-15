import { Module } from '@nestjs/common';
import { DisciplinesController } from './controller/disciplines.controller';
import { DisciplinesService } from './service/disciplines.service';
import { DisciplinesRepository } from './repository/disciplines.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  exports:[DisciplinesService],
  controllers: [DisciplinesController],
  providers: [DisciplinesService, DisciplinesRepository],
})
export class DisciplinesModule {}
