import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateOrderDto {
  @IsMongoId()
  @IsString()
  @IsOptional()
  _id: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;

  @IsDate()
  @IsNotEmpty()
  saleDate: Date;

  @IsString()
  @IsNotEmpty()
  status: 'IN_PROGRESS' | 'DONE';

  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;
}
