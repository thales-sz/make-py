import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Order } from 'src/orders/entities/order.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: SchemaTypes.ObjectId, required: false })
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({
    type: String,
    required: true,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  })
  role: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }] })
  order: Order[];
}

export const UserSchema = SchemaFactory.createForClass(User);
