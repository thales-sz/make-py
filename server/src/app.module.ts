import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { HealthCheckController } from './app.controller';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './database/database.module';
import * as Joi from 'joi';

import 'dotenv/config';
import { RoleGuard } from './auth/role.guard';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { JwtService } from '@nestjs/jwt';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
    }),
    UsersModule,
    ProductsModule,
    OrdersModule,
    AuthModule,
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100,
    }),
    PaymentModule,
  ],
  controllers: [HealthCheckController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    JwtService,
  ],
})
export class AppModule {}
