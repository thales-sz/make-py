import { PrismaClient, Prisma } from '@prisma/client'
import User from '../Interfaces/User.interface'

export default class AbstractModel {
  protected prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(obj: User): Promise<any> {
    
  }
    
}
