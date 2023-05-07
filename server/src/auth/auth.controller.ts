import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/metadata';
import { SignInDto, TokenDto } from './dto/auth.dto';
import { IToken } from './interfaces/token.interface';
import { UnprocessableEntityException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(@Body() { email, password }: SignInDto): Promise<IToken> {
    const user = await this.authService.validateUser(email, password);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const token = await this.authService.signIn(user);

    return { token };
  }

  @Public()
  @HttpCode(HttpStatus.ACCEPTED)
  @Post('token')
  async validateToken(@Body() token: TokenDto): Promise<void> {
    try {
      await this.authService.validateToken(token);
    } catch (error) {
      throw new UnprocessableEntityException('Invalid token');
    }
  }
}
