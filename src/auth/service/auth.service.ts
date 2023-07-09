import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { SignInDto } from '../dtos/sign.in.dto';
import { UsersRepository } from 'src/users/repository/users.repository';
import * as bcrypt from 'bcrypt';
import { AuthRepository } from '../repository/auth.repository';
import { SignInAnswer } from '../models/signin.answer';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
    private authRepository: AuthRepository,
  ) {}

  createToken(sessionId: number) {
    const token = this.jwtService.sign({ sessionId });

    return token;
  }

  async signIn(body: SignInDto) {
    const user = await this.usersRepository.findByEmail(body.email);

    if (!user || !bcrypt.compareSync(body.password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const session = await this.authRepository.createSession(user.id);
    const token = this.createToken(session.id);

    const signInAnswer: SignInAnswer = {
      token,
      firstName: user.firstName,
    };

    return signInAnswer;
  }

  async signUp(body: CreateUserDto) {
    const user = await this.usersRepository.findByEmail(body.email);

    if (user) {
      throw new ConflictException('Email is already registered');
    }

    const saltRounds = 10;
    const encryptedPassword = bcrypt.hashSync(body.password, saltRounds);

    await this.usersRepository.create({ ...body, password: encryptedPassword });
  }
}
