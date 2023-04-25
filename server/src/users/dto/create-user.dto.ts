import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
  IsMongoId,
  MaxLength,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {
  @IsMongoId()
  @IsString()
  @IsOptional()
  _id: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(16)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsOptional()
  @IsString()
  role: 'ADMIN' | 'USER';
}
