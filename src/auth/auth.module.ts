import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.JWT_SECRET }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
