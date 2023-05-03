import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { FilterQuery } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
    const user = { ...createUserDto, password: hashedPassword };
    return this.usersRepository.create(user);
  }

  async findAll(filterQuery: FilterQuery<User>): Promise<User[]> {
    return this.usersRepository.findAll(filterQuery);
  }

  async findOne(filterQuery: FilterQuery<User>): Promise<User | null> {
    return this.usersRepository.findOne(filterQuery);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.usersRepository.findOneAndUpdate({ _id: id }, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete({ _id: id });
  }
}
