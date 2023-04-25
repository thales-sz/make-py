import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order extends AbstractDocument {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: Number, required: true })
  totalPrice: number;

  @Prop({ type: Date, required: true, default: new Date() })
  saleDate: Date;

  @Prop({
    type: String,
    required: true,
    enum: ['IN_PROGRESS', 'DONE'],
    default: 'IN_PROGRESS',
  })
  status: string;

  @Prop({ type: String, required: true })
  deliveryAddress: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
