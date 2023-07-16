import { Module } from '@nestjs/common';
import { FieldsController } from './controller/fields.controller';
import { FieldsService } from './service/fields.service';
import { FieldsRepository } from './repository/fields.repository';
import { AuthModule } from 'src/auth/auth.module';
import { TrailsModule } from 'src/trails/trails.module';

@Module({
  imports: [AuthModule, TrailsModule],
  exports: [FieldsService],
  controllers: [FieldsController],
  providers: [FieldsService, FieldsRepository],
})
export class FieldsModule {}
