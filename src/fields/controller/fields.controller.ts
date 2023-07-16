import { Body, Controller, Post } from '@nestjs/common';
import { FieldsService } from '../service/fields.service';
import { CreateFieldDTO } from '../dtos/create.field.dto';
import { Auth } from 'src/decorators/auth.decorator';

@Controller('fields')
export class FieldsController {
  constructor(private fieldsService: FieldsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateFieldDTO) {
    const field = await this.fieldsService.create(data);

    return field;
  }
}
