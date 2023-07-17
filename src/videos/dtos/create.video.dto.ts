import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVideoDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  videoAdress: string;

  @IsNumber()
  chapterNumber: number;

  @IsNumber()
  subfieldId: number;
}
