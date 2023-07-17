import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateTrailDTO } from '../dtos/create.trail.dto';
import { TrailsService } from '../service/trails.service';
import { User } from 'src/decorators/user.decorator';
import { userInfo } from 'os';
import { UserPayload } from 'src/users/models/user.payload';

@Controller('trails')
export class TrailsController {
  constructor(private trailsService: TrailsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() body: CreateTrailDTO) {
    const trail = await this.trailsService.create(body);

    return trail;
  }

  @Post('enrollment/:trailId')
  @Auth()
  async createUserEnrollment(
    @User() user: UserPayload,
    @Param('trailId', ParseIntPipe) trailId: number,
  ) {
    await this.trailsService.createUserEnrollment(user.id, trailId);
  }

  @Delete('enrollment/:trailId')
  @Auth()
  async deleteUserEnrollment(
    @User() user: UserPayload,
    @Param('trailId', ParseIntPipe) trailId: number,
  ) {
    await this.trailsService.deleteUserEnrollment(user.id, trailId);
  }
}
