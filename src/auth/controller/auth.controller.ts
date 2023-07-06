import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from 'src/users/dtos/createUserDto';
import { UsersService } from 'src/users/service/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('sign-up')
  async createUser(@Body() body: CreateUserDto) {
    await this.usersService.create(body);
    console.log('prommise pending');
    return { message: 'Ok' };
  }
}
