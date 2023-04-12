import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

const jwtSecret = process.env.JWT_SECRET;

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [AuthService, UsersService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
