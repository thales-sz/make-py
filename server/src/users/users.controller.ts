import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Admin, Public } from 'src/common/metadata';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Public()
  @Post('signup')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.findOneByEmail(createUserDto.email);

    if (createUserDto.role)
      throw new UnauthorizedException('You cannot assign a role to a user');

    if (user) throw new ConflictException(`This email is already in use`);

    const createdUser = await this.usersService.create(createUserDto);

    const payload = { email: createdUser.email, role: createdUser.role };

    return this.jwtService.signAsync(payload);
  }

  @Admin()
  @Get('users')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) throw new NotFoundException(`User with id: '${id}' not found`);

    return user;
  }

  @Patch('user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.findOne(id);

    if (!user) throw new NotFoundException(`User with id: '${id}' not found`);

    return this.usersService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete('user/:id')
  async remove(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) throw new NotFoundException(`User with id: '${id}' not found`);

    return this.usersService.remove(id);
  }
}
