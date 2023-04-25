import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';
import { Order } from './schema/order.schema';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.create({ ...createOrderDto });
  }

  findAll() {
    return this.ordersRepository.findAll({});
  }

  findOne(id: string) {
    return this.ordersRepository.findOne({ _id: id });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersRepository.findOneAndUpdate(
      { _id: id },
      { ...updateOrderDto },
    );
  }

  remove(id: string) {
    return this.ordersRepository.delete({ _id: id });
  }
}
