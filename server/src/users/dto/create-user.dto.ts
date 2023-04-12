import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { IsEmailUnique } from 'src/common/email.validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsEmailUnique()
  email: string;

  @IsNotEmpty()
  @Length(6, 16)
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;
}
