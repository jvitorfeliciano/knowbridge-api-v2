import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserReportOnIABuggyInstruction {
  @IsNotEmpty()
  @IsString()
  description: string;
}
