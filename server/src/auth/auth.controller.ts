import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Admin, Public } from 'src/common/metadata';
import { SignInDto } from './dto/auth.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(@Body() { email, password, remember }: SignInDto) {
    const user = await this.authService.validateUser(email, password);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const token = await this.authService.signIn(user, remember);

    return { token };
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Get('token')
  async validateToken(@Req() req: Request) {
    await this.authService.validateToken(req);
  }

  @Admin()
  @HttpCode(HttpStatus.ACCEPTED)
  @Get('admin')
  async validateAdmin(@Req() req: Request) {
    await this.authService.validateToken(req);
  }
}
