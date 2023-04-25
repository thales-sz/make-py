import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 12);

    return this.usersRepository.create({ ...createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll({});
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({ _id: id });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.usersRepository.findOneAndUpdate(
      { _id: id },
      { ...updateUserDto },
    );
  }

  async remove(id: string) {
    return this.usersRepository.delete({ _id: id });
  }
}
