import { PrismaService } from './services/prisma/prisma.service';

@Module({
  providers: [PrismaService],
})
export class PrismaModule {}
