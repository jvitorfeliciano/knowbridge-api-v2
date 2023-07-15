import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTrailDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  disciplineId: number;
}
