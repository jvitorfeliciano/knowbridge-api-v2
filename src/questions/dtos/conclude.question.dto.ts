import { IsNumber } from 'class-validator';

export class ConcludeQuestionDTO {
  @IsNumber()
  answerId: number;
}
