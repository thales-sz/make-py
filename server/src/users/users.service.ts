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

    const createdUser = this.usersRepository.create({ ...createUserDto });

    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findById(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.usersRepository.findByIdAndUpdate(
      { _id: id },
      { ...updateUserDto },
      { new: true },
    );
  }

  async remove(id: string): Promise<User | null> {
    return this.usersRepository.findByIdAndDelete({ _id: id });
  }
}
