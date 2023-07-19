import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SubfieldsService } from '../service/subfields.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateSubfieldDTO } from '../dtos/create.subfield.dto';
import { User } from 'src/decorators/user.decorator';
import { UserPayload } from 'src/users/models/user.payload';

@Controller('subfields')
export class SubfieldsController {
  constructor(private subfieldsService: SubfieldsService) {}

  @Post()
  @Auth('ADMIN')
  async create(@Body() data: CreateSubfieldDTO) {
    const subfield = await this.subfieldsService.create(data);

    return subfield;
  }

  @Get(':subfieldId')
  @Auth()
  async findByIdIncludingMaterials(
    @User() user: UserPayload,
    @Param('subfieldId', ParseIntPipe) subfieldId: number,
  ) {
    const subfield = await this.subfieldsService.findByIdIncludingMaterial(
      user.id,
      subfieldId,
    );

    return subfield;
  }
}
