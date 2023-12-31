import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    await this.disciplinesService.findById(data.disciplineId);

    const trail = await this.trailsRepository.create(data);

    return trail;
  }

  async findById(id: number) {
    const trail = await this.trailsRepository.findById(id);

    if (!trail) {
      throw new NotFoundException('Trail is not registered');
    }

    return trail;
  }

  async findMany(userId: number) {
    const trails = await this.trailsRepository.findMany(userId);

    return trails;
  }

  async findByIdIncludingFieldsAndSubfields(trailId: number, userId: number) {
    const trail =
      await this.trailsRepository.findByIdIncludingFieldsAndSubfields(
        trailId,
        userId,
      );

    if (!trail) {
      throw new NotFoundException('Trail is not registered');
    }

    return trail;
  }

  async createUserEnrollment(userId: number, trailId: number) {
    const userEnrollment = await this.trailsRepository.findUserEnrollment(
      userId,
      trailId,
    );

    if (userEnrollment) {
      throw new ConflictException('User is already enrolled on this trail');
    }

    await this.trailsRepository.createUserEnrollment(userId, trailId);
  }

  async deleteUserEnrollment(userId: number, trailId: number) {
    const userEnrollment = await this.trailsRepository.findUserEnrollment(
      userId,
      trailId,
    );

    if (!userEnrollment) {
      throw new NotFoundException('User is not enrolled on this trail');
    }

    await this.trailsRepository.deleteUserEnrollment(userId, trailId);
  }
}
