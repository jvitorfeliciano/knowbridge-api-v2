import { Injectable } from '@nestjs/common';
import { CreateFieldDTO } from '../dtos/create.field.dto';
import { FieldsRepository } from '../repository/fields.repository';
import { TrailsService } from 'src/trails/service/trails.service';

@Injectable()
export class FieldsService {
  constructor(
    private fieldsRepository: FieldsRepository,
    private trailsService: TrailsService,
  ) {}

  async create(data: CreateFieldDTO) {
    await this.trailsService.findById(data.trailId);

    const field = await this.fieldsRepository.create(data);

    return field;
  }
}
