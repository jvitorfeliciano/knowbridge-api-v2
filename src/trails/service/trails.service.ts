import { Injectable } from '@nestjs/common';
import { TrailsRepository } from '../repository/trails.repository';
import { DisciplinesService } from 'src/disciplines/service/disciplines.service';
import { CreateTrailDTO } from '../dtos/create.trail.dto';

@Injectable()
export class TrailsService {
  constructor(
    private trailsRepository: TrailsRepository,
    private disciplinesService: DisciplinesService,
  ) {}

  async create(data: CreateTrailDTO) {
    await this.disciplinesService.CheckDisciplineExistsById(data.disciplineId);

    const trail = await this.trailsRepository.create(data);

    return trail;
  }
}
