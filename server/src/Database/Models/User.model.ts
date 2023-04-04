import { prismaClient } from '../prismaClient'
import { Address, type User } from '@prisma/client'

export default class UserModel {
  protected prisma

  constructor () {
    this.prisma = prismaClient.user
  }

  public async create (user: User, address: Address): Promise<User> {
    return await this.prisma.create({
      data: {
        ...user,
        address: address
      }
    })
  }

  public async getAll (): Promise<User[]> {
    return await this.prisma.findMany({
      include: {
        delivery_address: true
      }
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
