import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Types } from 'mongoose';
import { UnauthorizedException } from '@nestjs/common';

const usersList: User[] = [
  new User({ firstName: 'Mock 01' }),
  new User({ firstName: 'Mock 02' }),
  new User({ firstName: 'Mock 03' }),
];

const newUser: CreateUserDto = {
  firstName: 'New',
  lastName: 'User',
  email: 'user@example.com',
  password: 'password',
  phoneNumber: '12345678',
};

const newUserWithRole: CreateUserDto = {
  firstName: 'New',
  lastName: 'User',
  email: 'user@example.com',
  password: 'password',
  phoneNumber: '12345678',
  role: 'ADMIN',
};

const returnCreate: User = {
  _id: new Types.ObjectId(),
  firstName: 'New',
  lastName: 'User',
  email: 'user@example.com',
  password: 'password',
  phoneNumber: '12345678',
};

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue(returnCreate),
            findAll: jest.fn().mockResolvedValue(usersList),
            findOne: jest.fn().mockResolvedValue(usersList[0]),
            findOneByEmail: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('UsersController should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('UsersService should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('Find all method', () => {
    it('should return a list of users', async () => {
      const result = await usersController.findAll();

      expect(result).toBe(usersList);
    });
  });

  describe('Create method', () => {
    it('should create a new user when called with the right params', async () => {
      const result = await usersController.create(newUser);

      expect(result).toHaveProperty('_id');
    });

    it('should throw when trying to assign a role to a user', async () => {
      const result = await usersController.create(newUserWithRole);

      expect(result).toThrowError(new UnauthorizedException());
    });
  });
});
