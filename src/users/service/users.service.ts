import { ConflictException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { CreateUserDto } from '../dtos/createUserDto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(body: CreateUserDto) {
    const user = await this.usersRepository.findByEmail(body.email);

    if (user) {
      throw new ConflictException('Email is already registered');
    }

    const saltRounds = 10;
    const encryptedPassword = bcrypt.hashSync(body.password, saltRounds);

    await this.usersRepository.create({
      ...body,
      password: encryptedPassword,
    });
  }
}
