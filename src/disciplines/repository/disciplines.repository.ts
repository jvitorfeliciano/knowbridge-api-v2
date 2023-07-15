import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateDisciplineDTO } from '../dtos/create.discipline.dto';

@Injectable()
export class DisciplinesRepository {
  constructor(private prismaService: PrismaService) {}

  findByTitle(title: string) {
    return this.prismaService.discipline.findUnique({
      where: {
        title,
      },
    });
  }

  findById(id: number) {
    return this.prismaService.discipline.findUnique({
      where: {
        id,
      },
    });
  }

  create(data: CreateDisciplineDTO) {
    return this.prismaService.discipline.create({
      data,
    });
  }
}
