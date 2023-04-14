import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Order } from 'src/orders/entities/order.entity';

export type UserDocument = HydratedDocument<User>;

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Role, required: false })
  role: Role;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  order: Order[];
}

export const UserSchema = SchemaFactory.createForClass(User);
