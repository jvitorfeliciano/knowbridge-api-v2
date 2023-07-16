import { Injectable } from '@nestjs/common';
import { SubfieldsRepository } from '../repository/subfields.repository';
import { FieldsService } from 'src/fields/service/fields.service';
import { CreateSubfieldDTO } from '../dtos/create.subfield.dto';

@Injectable()
export class SubfieldsService {
  constructor(
    private subfieldsRepository: SubfieldsRepository,
    private fieldsService: FieldsService,
  ) {}

  async create(data: CreateSubfieldDTO) {
    await this.fieldsService.findById(data.fieldId);

    const subfield = await this.subfieldsRepository.create(data);

    return subfield;
  }
}
