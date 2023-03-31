import type { Request, Response, NextFunction } from 'express'
import { ProductService } from '../Domain/Services'

export default class ProductController {
  protected service: ProductService

  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.service = new ProductService()
  }

  public async getAll (): Promise<Response | undefined> {
    try {
      const response = await this.service.getAll()

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }
}
