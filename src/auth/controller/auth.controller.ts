import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { SignInDto } from '../dtos/sign.in.dto';
import { AuthGuard } from 'src/guards/auth.guard';

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

  @Get('teste')
  @UseGuards(AuthGuard)
  test() {
    return 'AuthGuard working';
  }
}
