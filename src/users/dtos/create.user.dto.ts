import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}

export { CreateUserDto };
