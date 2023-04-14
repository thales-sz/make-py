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

  @Prop({
    type: String,
    required: true,
    enum: ['IN_PROGRESS', 'DONE'],
    default: 'IN_PROGRESS',
  })
  status: string;

  @Prop()
  deliveryAddress: string;
}
