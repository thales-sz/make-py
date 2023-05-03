import { AbstractRepository } from 'src/database/abstract.repository';
import { Product } from './schema/product.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

export default class ProductsRepository extends AbstractRepository<Product> {
  constructor(
    @InjectModel(Product.name) productModel: Model<Product>,
    @InjectConnection() connection: Connection,
  ) {
    super(productModel, connection);
  }
}
