import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';
import { Order } from 'src/orders/schema/order.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends AbstractDocument {
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
  role?: 'ADMIN' | 'USER';

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }], required: false })
  order?: Order[];

  constructor(user?: Partial<User>) {
    super();
    this._id = user?._id;
    this.email = user?.email;
    this.firstName = user?.firstName;
    this.lastName = user?.lastName;
    this.password = user?.password;
    this.phoneNumber = user?.phoneNumber;
    this.role = user?.role;
    this.order = user?.order;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
