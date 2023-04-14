import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { HealthCheckController } from './app.controller';
import { OrdersModule } from './orders/orders.module';

import 'dotenv/config';

const MONGO_URL = process.env.MONGO_URL;

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    SalesModule,
    AuthModule,
    MongooseModule.forRoot(MONGO_URL),
    OrdersModule,
  ],
  controllers: [HealthCheckController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
