import { Module } from '@nestjs/common';
import { SubfieldsController } from './controller/subfields.controller';
import { SubfieldsService } from './service/subfields.service';
import { SubfieldsRepository } from './repository/subfields.repository';
import { FieldsModule } from 'src/fields/fields.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, FieldsModule],
  controllers: [SubfieldsController],
  providers: [SubfieldsService, SubfieldsRepository],
})
export class SubfieldsModule {}
