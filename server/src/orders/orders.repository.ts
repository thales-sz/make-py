import { Injectable } from '@nestjs/common';
import { AbstractRepository } from 'src/database/abstract.repository';
import { Order } from './schema/order.schema';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {}
