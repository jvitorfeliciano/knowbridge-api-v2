import {
  Body,
  Controller,
  Get,
  Post,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { SignInDto } from '../dtos/sign.in.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Auth } from 'src/decorators/auth.decorator';

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
  @Auth()
  test() {
    return 'AuthGuard working';
  }
}
