import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { DisciplinesService } from '../service/disciplines.service';
import { CreateDisciplineDTO } from '../dtos/create.discipline.dto';

@Controller('disciplines')
export class DisciplinesController {
  constructor(private disciplinesService: DisciplinesService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() body: CreateDisciplineDTO) {
    const discipline = await this.disciplinesService.create(body);

    return discipline;
  }
}
