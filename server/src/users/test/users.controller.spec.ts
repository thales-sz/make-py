import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { User } from '../schema/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { Types } from 'mongoose';
import { ConflictException, NotFoundException } from '@nestjs/common';

const usersList: User[] = [
  new User({
    _id: new Types.ObjectId('644d38a85e6a824c43911d78'),
    firstName: 'Mock 01',
  }),
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
            findOne: jest.fn(),
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
      jest.spyOn(usersController, 'findOne').mockResolvedValue(null);

      const result = await usersController.create(newUser);

      expect(result).toHaveProperty('_id');
    });

    it('should throw when trying to assign a role to a user', async () => {
      await expect(
        async () => await usersController.create(newUserWithRole),
      ).rejects.toThrowError();
    });

    it('should throw when trying to create a user with a already used email', async () => {
      jest
        .spyOn(usersController, 'create')
        .mockRejectedValue(new ConflictException());

      await expect(
        async () => await usersController.create(newUser),
      ).rejects.toThrowError(new ConflictException());
    });
  });

  describe('Find one method', () => {
    it('should return one unique user with the param id', async () => {
      jest.spyOn(usersController, 'findOne').mockResolvedValue(usersList[0]);

      const result = await usersController.findOne('644d38a85e6a824c43911d78');

      expect(result).toBe(usersList[0]);
    });

    it('should throw when user with the param id do not exist', async () => {
      jest
        .spyOn(usersController, 'findOne')
        .mockRejectedValueOnce(new NotFoundException());

      expect(usersController.findOne('INVALID_ID')).rejects.toThrowError();
    });
  });
});
