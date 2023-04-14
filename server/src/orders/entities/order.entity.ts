import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop()
  totalPrice: number;

  @Prop()
  saleDate: Date;

  @Prop()
  status: DeliveryStatus;

  @Prop()
  deliveryAddress: string;
}

enum DeliveryStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}
