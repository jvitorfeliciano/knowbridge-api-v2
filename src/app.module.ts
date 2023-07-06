import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { FieldsModule } from './fields/fields.module';
import { SubfieldsModule } from './subfields/subfields.module';
import { VideosModule } from './videos/videos.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    DisciplinesModule,
    FieldsModule,
    SubfieldsModule,
    VideosModule,
    QuestionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
