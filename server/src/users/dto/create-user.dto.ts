import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  @IsOptional()
  @Length(36)
  id: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsNotEmpty()
  role: 'ADMIN' | 'USER';
}
