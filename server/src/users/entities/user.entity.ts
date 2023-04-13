import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

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
}

export const UserSchema = SchemaFactory.createForClass(User);
