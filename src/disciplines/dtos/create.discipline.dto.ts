import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDisciplineDTO {
  @IsNotEmpty()
  @IsString()
  title: string;
}
