import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFieldDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  unitNumber: number;

  @IsNumber()
  trailId: number;
}
