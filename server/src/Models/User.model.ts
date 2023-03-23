import { prismaClient } from '../Database/prismaClient';
import { User } from '@prisma/client';

export default class UserModel {
  protected prisma: typeof prismaClient

  constructor() {
    this.prisma = prismaClient;
  }

  public async create(obj: User): Promise<User> {
    return this.prisma.user.create({ data: { ...obj } });
  }

  public async get(): Promise<User[]> {
    return this.prisma.user.findMany({})
  }

  public async update(id: string, obj: User): Promise<User> {
    return this.prisma.user.update({
      where: { id: id },
      data: { ...obj }
    })
  }
}
