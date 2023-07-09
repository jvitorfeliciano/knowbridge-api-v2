import { IsEmail, MinLength } from 'class-validator';

class SignInDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}

export { SignInDto };
