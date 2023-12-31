import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DisciplinesRepository } from '../repository/disciplines.repository';
import { CreateDisciplineDTO } from '../dtos/create.discipline.dto';

@Injectable()
export class DisciplinesService {
  constructor(private disciplinesRepository: DisciplinesRepository) {}

  async CheckDisciplineIsAlreadyRegistered(title: string) {
    const discipline = await this.disciplinesRepository.findByTitle(title);

    if (discipline) {
      throw new ConflictException('This discipline is already registered');
    }
  }

  async findById(id: number) {
    const discipline = await this.disciplinesRepository.findById(id);

    if (!discipline) {
      throw new NotFoundException('This discipline does not  exist');
    }
  }

  async create(body: CreateDisciplineDTO) {
    await this.CheckDisciplineIsAlreadyRegistered(body.title);

    const discipline = await this.disciplinesRepository.create(body);

    return discipline;
  }
}
