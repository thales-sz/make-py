import {
  IsEmail,
  IsJWT,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(16)
  password: string;
}

export class TokenDto {
  @IsNotEmpty()
  @IsJWT()
  token: string;
}
