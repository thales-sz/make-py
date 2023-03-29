import { prismaClient } from '../prismaClient'
import { type User } from '@prisma/client'

export default class UserModel {
  protected prisma

  constructor () {
    this.prisma = prismaClient.user
  }

  public async create (obj: User): Promise<User> {
    return await this.prisma.create({ data: { ...obj } })
  }

  public async get (): Promise<User[]> {
    return await this.prisma.findMany({
    })
  }

  public async getById (id: string): Promise<User | null> {
    return await this.prisma.findFirst({
      where: { id }
    })
  }

  public async update (id: string, obj: User): Promise<User | null> {
    return await this.prisma.update({
      where: { id },
      data: { ...obj }
    })
  }

  public async getByEmail (email: string): Promise<User | null> {
    return await this.prisma.findFirst({
      where: { email }
    })
  }

  public async delete (id: string): Promise<User> {
    return await this.prisma.delete({
      where: { id }
    })
  }
}
