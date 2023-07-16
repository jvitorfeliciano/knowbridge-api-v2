import { Module } from '@nestjs/common';
import { SubfieldsController } from './controller/subfields.controller';
import { SubfieldsService } from './service/subfields.service';

@Module({
  controllers: [SubfieldsController],
  providers: [SubfieldsService],
})
export class SubfieldsModule {}
