import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { HealthCheckController } from './app.controller';

@Module({
  imports: [UsersModule, PrismaModule, ProductsModule, SalesModule, AuthModule],
  controllers: [HealthCheckController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
