import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(6, 16)
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;
}
