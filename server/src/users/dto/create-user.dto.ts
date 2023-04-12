import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  Validate,
} from 'class-validator';
import { ValidateUniqueEmail } from 'src/common/validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @Validate(ValidateUniqueEmail)
  email: string;

  @IsNotEmpty()
  @Length(6, 16)
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;
}
