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
import { SignInResponse } from '../models/signin.response';
import { TokenVerificationResponse } from '../models/token.verification.response';

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

  async checkSession(id: number) {
    const session = await this.authRepository.findById(id);

    if (!session) {
      throw new UnauthorizedException('Invalid session');
    }

    return session;
  }

  async checkUser(id: number) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UnauthorizedException('Invalid user');
    }

    return user;
  }

  async checkToken(token: string) {
    try {
      const data: TokenVerificationResponse = this.jwtService.verify(token);

      const session = await this.checkSession(data.sessionId);

      const user = await this.checkUser(session.userId);

      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async signIn(body: SignInDto) {
    const user = await this.usersRepository.findByEmail(body.email);

    if (!user || !bcrypt.compareSync(body.password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const session = await this.authRepository.createSession(user.id);
    const token = this.createToken(session.id);

    const signInResponse: SignInResponse = {
      token,
      firstName: user.firstName,
      role: user.role,
    };

    return signInResponse;
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
