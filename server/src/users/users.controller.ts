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
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Admin, Public } from 'src/common/metadata';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.findOneByEmail(createUserDto.email);

    if (user) throw new ConflictException(`This email is already in use`);

    return this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(RoleGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    console.log(user);

    if (!user) throw new NotFoundException(`User with id: '${id}' not found`);

    return user;
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.findOne(id);

    if (!user) throw new NotFoundException(`User with id: '${id}' not found`);

    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) throw new NotFoundException(`User with id: '${id}' not found`);

    return this.usersService.remove(id);
  }
}
