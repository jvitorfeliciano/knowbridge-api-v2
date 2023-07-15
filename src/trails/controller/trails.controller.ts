import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateTrailDTO } from '../dtos/create.trail.dto';
import { TrailsService } from '../service/trails.service';

@Controller('trails')
export class TrailsController {
  constructor(private trailsService: TrailsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() body: CreateTrailDTO) {
    const trail = await this.trailsService.create(body);

    return trail;
  }
}
