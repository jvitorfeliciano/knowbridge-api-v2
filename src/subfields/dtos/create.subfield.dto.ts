import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubfieldDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  lessonNumber: number;

  @IsNumber()
  fieldId: number;
}
