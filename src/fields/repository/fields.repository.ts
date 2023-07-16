import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';

@Injectable()
export class FieldsRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: any) {
    return this.prismaService.field.create({
      data,
    });
  }

  findById(id: number) {
    return this.prismaService.field.findUnique({
      where: {
        id,
      },
    });
  }
}
