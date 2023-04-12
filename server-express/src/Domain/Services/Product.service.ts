import { ProductModel } from '../../Database/Models'
import { type Product } from '@prisma/client'

export default class ProductService {
  protected model: ProductModel

  constructor () {
    this.model = new ProductModel()
  };

  public async getAll (): Promise<Product[]> {
    return await this.model.getAll()
  }

  public async create (product: any): Promise<Product> {
    return await this.model.create(product)
  }
}
