import { prismaClient } from '../prismaClient'
import { type Product } from '@prisma/client'

export default class ProductModel {
  protected prisma

  constructor () {
    this.prisma = prismaClient.product
  }

  public async create (obj: Product): Promise<Product> {
    return await this.prisma.create({
      data: {
        price: obj.price,
        name: obj.name,
        description: obj.description,
        stock_quantity: {
          create: { quantity: 50 }
        }
      }
    })
  }

  public async getAll (): Promise<Product[]> {
    return await this.prisma.findMany({
      include: {
        stock_quantity: true
      }
    })
  }
}
