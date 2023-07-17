import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAnswerDTO {
  @IsNotEmpty()
  @IsString()
  answer: string;

  @IsBoolean()
  isCorrect: boolean;
}
