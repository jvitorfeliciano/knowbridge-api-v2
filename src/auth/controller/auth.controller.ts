import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { UsersService } from 'src/users/service/users.service';
import { SignInDto } from '../dtos/sign.in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() body: CreateUserDto) {
    await this.authService.signUp(body);

    return { message: 'Ok' };
  }

  @Post('sign-in')
  async signIn(@Body() body: SignInDto) {
    const answer = await this.authService.signIn(body);

    return answer;
  }
}
