import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';

export class Product extends AbstractDocument {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Date, required: false, default: new Date() })
  createdAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
