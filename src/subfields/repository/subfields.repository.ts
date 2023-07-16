import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CreateSubfieldDTO } from '../dtos/create.subfield.dto';

@Injectable()
export class SubfieldsRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: CreateSubfieldDTO) {
    return this.prismaService.subfield.create({
      data,
    });
  }

  findById(id: number) {
    return this.prismaService.subfield.findUnique({
      where: {
        id,
      },
    });
  }
}
