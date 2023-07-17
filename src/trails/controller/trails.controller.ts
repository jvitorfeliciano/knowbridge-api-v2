import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateTrailDTO } from '../dtos/create.trail.dto';
import { TrailsService } from '../service/trails.service';
import { User } from 'src/decorators/user.decorator';
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

  @Get()
  @Auth()
  async findMany(@User() user: UserPayload) {
    const trails = await this.trailsService.findMany(user.id);

    return trails;
  }

  @Get(':trailId')
  @Auth()
  async findById(
    @User() user: UserPayload,
    @Param('trailId', ParseIntPipe) trailId: number,
  ) {
    const trail = await this.trailsService.findByIdIncludingFieldsAndSubfields(
      trailId,
      user.id,
    );

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
