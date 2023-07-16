import { Body, Controller, Post } from '@nestjs/common';
import { SubfieldsService } from '../service/subfields.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateSubfieldDTO } from '../dtos/create.subfield.dto';

@Controller('subfields')
export class SubfieldsController {
  constructor(private subfieldsService: SubfieldsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateSubfieldDTO) {
    const subfield = await this.subfieldsService.create(data);

    return subfield;
  }
}
