import { Injectable } from '@nestjs/common';
import { AbstractRepository } from 'src/database/abstract.repository';
import { Order } from './schema/order.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  constructor(
    @InjectModel(Order.name) ordersModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(ordersModel, connection);
  }
}
